import { AllApps, Documents, Power, SideMenu } from './SideBarIcons';
import StyledSidebar from './StyledSidebar';
import StyledSidebarButton from './StyledSidebarButton';
import SystemContext, { SystemState } from '../../../../../contexts/SystemContext';

type SideBarButtonProps = {
  active?: boolean;
  icon: JSX.Element;
  name: string;
  action?: (system: SystemState) => Promise<void>;
};

const topButtons = [
  { name: 'START', icon: <SideMenu /> },
  { name: 'All apps', icon: <AllApps />, active: true },
];

const bottomButtons: SideBarButtonProps[] = [
  { name: 'Documents', icon: <Documents /> },
  {
    name: 'Logout',
    icon: <Power />,
    action: async ({ logout }) => {
      await logout();
    },
  },
];

const SidebarButton = ({ active, icon, name, action }: SideBarButtonProps): JSX.Element => (
  <SystemContext.Consumer>
    {(context) => (
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
    )}
  </SystemContext.Consumer>
);

const Sidebar = (): JSX.Element => (
  <StyledSidebar>
    {Object.entries({ topButtons, bottomButtons }).map(([key, buttons]) => (
      <ol key={key}>{buttons.map(SidebarButton)}</ol>
    ))}
  </StyledSidebar>
);

export default Sidebar;
