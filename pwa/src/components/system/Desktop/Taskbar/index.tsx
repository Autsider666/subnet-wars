// import StartMenu from "components/system/StartMenu";
import Clock from "./Clock";
// import StartButton from "components/system/Taskbar/StartButton";
import StyledTaskbar from "./StyledTaskBar";
// import TaskbarEntries from "components/system/Taskbar/TaskbarEntries";
// import { useSession } from "contexts/session";

const Taskbar = (): JSX.Element => {
  // const { startMenuVisible } = useSession();

  return (
    <>
      {/*{startMenuVisible && <StartMenu />}*/}
      <StyledTaskbar tabIndex={-1}>
        {/*<StartButton />*/}
        {/*<TaskbarEntries />*/}
        <Clock />
      </StyledTaskbar>
    </>
  );
};

export default Taskbar;
