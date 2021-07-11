import SideBar from 'components/system/Desktop/StartMenu/SideBar';
import StyledStartMenu from 'components/system/Desktop/StartMenu/StyledStartMenu';
import useStartMenuTransition from 'components/system/Desktop/StartMenu/useStartMenuTransition';
import { FocusEventHandler, useEffect, useRef } from 'react';
import FileView from 'components/system/Files/FileView';
import { useSystem } from 'contexts/SystemContext';

const StartMenu = (): JSX.Element => {
  const { toggleStartMenu } = useSystem();
  const menuRef = useRef<HTMLElement | null>(null);
  const maybeCloseMenu: FocusEventHandler<HTMLElement> = ({ relatedTarget }) => {
    const clickedElement = relatedTarget as HTMLElement;
    const clickedInsideMenu = menuRef.current?.contains(clickedElement);

    if (!clickedInsideMenu) {
      const clickedTaskbar = clickedElement === menuRef.current?.nextSibling;
      const clickedStartButton = clickedElement?.parentElement === menuRef.current?.nextSibling;

      if (!clickedTaskbar && !clickedStartButton) {
        toggleStartMenu(false);
      } else {
        menuRef.current?.focus();
      }
    }
  };

  useEffect(() => menuRef.current?.focus(), []);

  return (
    <StyledStartMenu
      onBlur={maybeCloseMenu}
      tabIndex={-1}
      ref={menuRef}
      {...useStartMenuTransition()}
    >
      <SideBar />
      <FileView url={'/startMenu'} compact={true} />
    </StyledStartMenu>
  );
};

export default StartMenu;
