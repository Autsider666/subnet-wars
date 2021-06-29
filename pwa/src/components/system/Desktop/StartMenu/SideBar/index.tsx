import { AllApps, Documents, Power, SideMenu } from "./SideBarIcons";
import StyledSidebar from "./StyledSidebar";
import StyledSidebarButton from "./StyledSidebarButton";

type SideBarButtonProps = {
  active?: boolean;
  icon: JSX.Element;
  name: string;
  action?: () => void;
};

const topButtons = [
  { name: "START", icon: <SideMenu /> },
  { name: "All apps", icon: <AllApps />, active: true },
];

const bottomButtons: SideBarButtonProps[] = [
  { name: "Documents", icon: <Documents /> },
  {
    name: "Logout",
    icon: <Power />,
    action: () => {
      console.log("logout");
    },
  },
];

const SidebarButton = ({ active, icon, name, action }: SideBarButtonProps) => (
  <StyledSidebarButton key={name} active={active} onClick={action} title={name}>
    <figure>
      {icon}
      <figcaption>{name}</figcaption>
    </figure>
  </StyledSidebarButton>
);

const Sidebar = (): JSX.Element => (
  <StyledSidebar>
    {Object.entries({ topButtons, bottomButtons }).map(([key, buttons]) => (
      <ol key={key}>{buttons.map(SidebarButton)}</ol>
    ))}
  </StyledSidebar>
);

export default Sidebar;
