import React, { useContext } from "react";
import SystemContext from "./contexts/SystemContext";
import LoginForm from "./components/system/LoginForm";
import { useGameClient } from "./contexts/GameContext";
import axios from "axios";

function App() {
  const { connected } = useGameClient();
  const { authenticated, setAuthenticated } = useContext(SystemContext);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.log("Logout!");
        setAuthenticated(false);
      }
      return error.response;
    }
  );

  if (connected && authenticated) {
    return (
      <div>
        <button
          onClick={(): void => {
            axios.post("https://localhost/api/logout");
            setAuthenticated(false);
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  if (!connected && authenticated) {
    return <div>Loading</div>;
  }

  return <LoginForm />;
}

export default App;
