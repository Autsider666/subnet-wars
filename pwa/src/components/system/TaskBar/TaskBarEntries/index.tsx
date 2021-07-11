import StyledTaskBarEntries from 'components/system/TaskBar/TaskBarEntries/StyledTaskBarEntries';
import TaskBarEntry from 'components/system/TaskBar/TaskBarEntry';
import { ProcessorConsumer } from 'contexts/ProcessorContext';

const TaskBarEntries = (): JSX.Element => (
  <StyledTaskBarEntries>
    <ProcessorConsumer>
      {({ processes = {} }) =>
        Object.entries(processes)
          .filter(([, process]) => !process.closing)
          .map(([id, { icon, title }]) => (
            <TaskBarEntry key={id} icon={icon} id={id} title={title} />
          ))
      }
    </ProcessorConsumer>
  </StyledTaskBarEntries>
);

export default TaskBarEntries;
