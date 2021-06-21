import { Context, createContext } from 'react';
import { Client } from 'colyseus.js';

type Game = {
  client: Client | null;
};

let GameContext: Context<Game> | null = null;

export const GameContextWrapper = ({ children }): JSX.Element => {
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }
  if (typeof window !== 'undefined' && GameContext === null) {
    console.log(123);
    GameContext = createContext<Game>({ client: new Client('wss://server.localhost') });
  }

  // client
  //     .joinOrCreate('my_room')
  //     .then((room) => {
  //       console.log(room.sessionId, 'joined', room.name);
  //     })
  //     .catch((e) => {
  //       console.log('JOIN ERROR', e);
  //     });
  return <GameContext.Provider value={{}}>{children}</GameContext.Provider>;
};
