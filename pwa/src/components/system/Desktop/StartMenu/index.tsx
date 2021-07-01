import SideBar from './SideBar';
import StyledStartMenu from './StyledStartMenu';
import { FocusEventHandler, useContext, useEffect, useRef } from 'react';
import SystemContext from '../../../../contexts/SystemContext';
import FileView from '../../Files/FileView';

const StartMenu = (): JSX.Element => {
  const { toggleStartMenu } = useContext(SystemContext);
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
      <FileView url={'/startMenu'} listDisplay={true} compact={true} />
    </StyledStartMenu>
  );
};

export default StartMenu;
