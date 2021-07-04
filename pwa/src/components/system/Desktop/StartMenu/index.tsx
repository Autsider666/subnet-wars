import SideBar from 'components/system/Desktop/StartMenu/SideBar';
import StyledStartMenu from 'components/system/Desktop/StartMenu/StyledStartMenu';
import { FocusEventHandler, useEffect, useRef } from 'react';
import FileView from 'components/system/Files/FileView';
import { useSystem } from 'contexts/SystemContext';

const StartMenu = (): JSX.Element => {
  const { toggleStartMenu } = useSystem();
  const menuRef = useRef<HTMLElement | null>(null);
  const maybeCloseMenu: FocusEventHandler<HTMLElement> = ({ relatedTarget }) => {
    if (!menuRef.current?.contains(relatedTarget as HTMLElement)) {
      if (
        menuRef.current?.nextSibling &&
        ![relatedTarget, (relatedTarget as HTMLElement)?.parentElement].includes(
          menuRef.current?.nextSibling
        )
      ) {
        toggleStartMenu(false);
      } else {
        menuRef.current?.focus();
      }
    }
  };

  useEffect(() => menuRef.current?.focus(), []);

  return (
    <StyledStartMenu onBlur={maybeCloseMenu} tabIndex={-1} ref={menuRef}>
      <SideBar />
      <FileView url={'/startMenu'} compact={true} />
    </StyledStartMenu>
  );
};

export default StartMenu;
