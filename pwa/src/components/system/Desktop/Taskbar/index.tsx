import Clock from "./Clock";
import StartButton from "./StartButton";
import StyledTaskbar from "./StyledTaskBar";
import { useContext } from "react";
import SystemContext from "../../../../contexts/SystemContext";
import StartMenu from "../StartMenu";
// import TaskbarEntries from "components/system/Taskbar/TaskbarEntries";

const Taskbar = (): JSX.Element => {
  const { showStartMenu } = useContext(SystemContext);

  return (
    <>
      {showStartMenu && <StartMenu />}
      <StyledTaskbar tabIndex={-1}>
        <StartButton />
        {/*<TaskbarEntries />*/}
        <Clock />
      </StyledTaskbar>
    </>
  );
};

export default Taskbar;
