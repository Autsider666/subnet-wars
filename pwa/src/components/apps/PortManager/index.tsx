import StyledTable from 'components/apps/PortManager/StyledTable';

enum ScriptType {
  Attack,
  Banking,
  FTP,
  HTTP,
}

interface Script {
  name: string;
  baseCpu: number;
  type: ScriptType;
}

interface Firewall {
  name: string;
}

interface Port {
  active: boolean;
  script?: Script;
  firewall?: Firewall;
  currentCpu: number;
  health: number;
}

const PortManager = (): JSX.Element => {
  const ports: { [id: number]: Port } = {
    0: {
      active: true,
      currentCpu: 20,
      health: 100,
    },
    1: {
      active: false,
      currentCpu: 30,
      health: 80,
    },
    2: {
      active: true,
      currentCpu: 20,
      health: 88,
    },
    3: {
      active: true,
      currentCpu: 99,
      health: 100,
    },
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Id</th>
          <th>On/Off</th>
          <th>Cpu</th>
          <th>Health</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(ports).map(([index, port]) => (
          <tr key={index}>
            <td>{port.active ? 'On' : 'Off'}</td>
            <td>{port.script ? port.script.name : 'Install Script'}</td>
            <td>{port.currentCpu}</td>
            <td>{port.health}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default PortManager;
