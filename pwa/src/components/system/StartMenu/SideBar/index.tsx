import {
  AllApps,
  Documents,
  Power,
  SideMenu,
} from 'components/system/StartMenu/SideBar/SideBarIcons';
import StyledSidebar from 'components/system/StartMenu/SideBar/StyledSidebar';
import StyledSidebarButton from 'components/system/StartMenu/SideBar/StyledSidebarButton';
import { SystemState, useSystem } from 'contexts/SystemContext';
import { useProcessor } from 'contexts/ProcessorContext';

type SideBarButtonProps = {
  active?: boolean;
  icon: JSX.Element;
  name: string;
  action?: (system: SystemState) => Promise<void>;
};

const SidebarButton = ({ active, icon, name, action }: SideBarButtonProps): JSX.Element => {
  const context = useSystem();

  return (
    <StyledSidebarButton
      key={name}
      active={active}
      onClick={() => (action ? action(context) : null)}
      title={name}
    >
      <figure>
        {icon}
        <figcaption>{name}</figcaption>
      </figure>
    </StyledSidebarButton>
  );
};

const SideBar = (): JSX.Element => {
  const { open } = useProcessor();

  const topButtons = [
    { name: 'START', icon: <SideMenu /> },
    { name: 'All apps', icon: <AllApps />, active: true },
  ];

  const bottomButtons: SideBarButtonProps[] = [
    {
      name: 'Documents',
      icon: <Documents />,
      action: async () => {
        open('FileExplorer', '/');
      },
    },
    {
      name: 'Logout',
      icon: <Power />,
      action: async ({ logout }) => {
        await logout();
      },
    },
  ];

  return (
    <StyledSidebar>
      {Object.entries({ topButtons, bottomButtons }).map(([key, buttons]) => (
        <ol key={key}>{buttons.map(SidebarButton)}</ol>
      ))}
    </StyledSidebar>
  );
};

export default SideBar;
