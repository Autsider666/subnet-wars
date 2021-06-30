import SideBar from './SideBar';
import StyledStartMenu from './StyledStartMenu';
import { FocusEventHandler, useContext, useEffect, useRef } from 'react';
import SystemContext from '../../../../contexts/SystemContext';
import { ChonkyActions, FileArray, FileBrowser, FileList } from 'chonky';

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

  const files: FileArray = [
    { id: 'lht', name: 'Projects', isDir: true },
    {
      id: 'mcd',
      name: 'chonky-sphere-v2.png',
      thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
    },
  ];

  return (
    <StyledStartMenu onBlur={maybeCloseMenu} tabIndex={-1} ref={menuRef}>
      <SideBar />
      <div className={'start-menu'} style={{ width: '100%' }}>
        <FileBrowser files={files} defaultFileViewActionId={ChonkyActions.EnableListView.id}>
          <FileList />
        </FileBrowser>
      </div>
    </StyledStartMenu>
  );
};

export default StartMenu;
