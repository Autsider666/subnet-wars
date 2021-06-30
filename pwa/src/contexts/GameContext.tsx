import { Context, createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Client, Room } from 'colyseus.js';
import axios from 'axios';
import SystemContext from './SystemContext';

export type RoomReservation = {
  sessionId: string;
  room: {
    roomId: string;
    processId: string;
    name: string;
    locked: boolean;
  };
};

type GameState = {
  username: string;
};

type GameClient = {
  consumeSeatReservation: (reservation: RoomReservation) => Promise<Room | null>;
};

let client: Client;
let osRoom: Room | null;

const gameFunctions = {
  consumeSeatReservation: async (reservation: RoomReservation | null): Promise<Room | null> => {
    if (!client) {
      return null;
    }

    const room = await client.consumeSeatReservation(reservation);
    console.log('joined successfully', room);
    return room;
  },
};

export const GameContext: Context<GameClient> = createContext<GameClient>(gameFunctions);

export const GameContextWrapper = ({ children }: { children: ReactNode }): JSX.Element => {
  if (typeof window !== 'undefined') {
    client = new Client(`wss://${window.location.hostname}/api`);
  }
  return <GameContext.Provider value={gameFunctions}>{children}</GameContext.Provider>;
};

export const useGameClient = (): {
  connected: boolean;
  state: GameState | null;
} => {
  const [connected, setConnected] = useState(false);
  const [state, setState] = useState<GameState | null>(null);
  const { authenticated, setAuthenticated } = useContext(SystemContext);
  useEffect(() => {
    if (!authenticated) {
      return;
    }
    (async (): Promise<void> => {
      const { status, data } = await axios.post<RoomReservation>('/api/refresh');
      console.log(status);
      if (status !== 200) {
        setAuthenticated(false);
      } else {
        if (data) {
          osRoom = await gameFunctions.consumeSeatReservation(data);
          osRoom?.onStateChange((state) => setState(state));
        }
        setConnected(true);
      }
    })();
  }, [authenticated, setAuthenticated]);

  useEffect(() => {
    if (connected && !authenticated && osRoom !== null) {
      osRoom.leave();
    }
  }, [connected, authenticated]);

  return { connected, state };
};
