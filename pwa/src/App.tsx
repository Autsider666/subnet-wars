import React, { useContext } from "react";
import SystemContext from "./contexts/SystemContext";
import LoginForm from "./components/system/LoginForm";
import { useGameClient } from "./contexts/GameContext";
import axios from "axios";
import Desktop from "./components/system/Desktop";

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

  if (!authenticated) {
    return <LoginForm />;
  }

  if (!connected) {
    return <div>Loading</div>;
  }

  return <Desktop />;
  // return (
  //   <div>
  //     {state?.username}
  //     <button
  //       onClick={async () => {
  //         await axios.post("https://localhost/api/logout");
  //         setAuthenticated(false);
  //       }}
  //     >
  //       Logout
  //     </button>
  //   </div>
  // );
}

export default App;
