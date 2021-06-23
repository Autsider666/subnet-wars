import { Context, createContext, ReactNode, useEffect, useState } from 'react';
import { Client, Room } from 'colyseus.js';
import axios from 'axios';
import { useRouter } from 'next/router';

export type RoomReservation = {
  sessionId: string;
  room: {
    roomId: string;
    processId: string;
    name: string;
    locked: boolean;
  };
};

type GameClient = {
  consumeSeatReservation: (reservation: RoomReservation) => Promise<Room>;
};

let client: Client;

const state = {
  consumeSeatReservation: async (reservation) => {
    if (!client) {
      return null;
    }
    const room = await client.consumeSeatReservation(reservation);
    console.log('joined successfully', room);
    return room;
  },
};

export const GameContext: Context<GameClient> = createContext<GameClient>(state);

export const GameContextWrapper = ({ children }: ReactNode): JSX.Element => {
  if (typeof window !== 'undefined') {
    client = new Client('wss://localhost/api');
  }
  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export const useGameClient = (): { connected: boolean } => {
  const router = useRouter();
  const [connected, setConnected] = useState(false);
  useEffect<Promise<void>>(() => {
    (async (): Promise<void> => {
      const { status, data } = await axios.post<RoomReservation>('https://localhost/api/refresh');
      console.log(status);
      if (status !== 200) {
        await router.push('/login');
      } else {
        if (data) {
          await state.consumeSeatReservation(data);
        }
        setConnected(true);
      }
    })();
  }, [router]);

  return { connected };
};
