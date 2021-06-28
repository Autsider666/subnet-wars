import Terminal from '../components/apps/Terminal';
import RenderComponent from '../components/system/Apps/RenderComponent';
import { NextPage } from 'next';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useGameClient } from '../contexts/GameContext';

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return error.response;
  }
);

const Index: NextPage = () => {
  const { connected } = useGameClient();

  const GameContextWrapper = dynamic(() =>
    import('../contexts/GameContext').then((module) => module.GameContextWrapper)
  );

  return connected ? (
    <GameContextWrapper>
      <RenderComponent id="1" Component={Terminal} hasWindow={true} />
    </GameContextWrapper>
  ) : null;
};

export default Index;
