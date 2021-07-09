import RenderComponent from 'components/system/Apps/RenderComponent';
import { AnimatePresence } from 'framer-motion';
import { ProcessorConsumer } from 'contexts/ProcessorContext';

const AppsLoader = (): JSX.Element => (
  <>
    processes
    <ProcessorConsumer>
      {({ processes = {} }) => (
        <AnimatePresence>
          {Object.entries(processes)
            .filter(([, process]) => !process.closing)
            .map(([id, process]) => (
              <RenderComponent
                key={id}
                Component={process.Component}
                hasWindow={process.hasWindow}
                id={id}
              />
            ))}
        </AnimatePresence>
      )}
    </ProcessorConsumer>
  </>
);

export default AppsLoader;
