import RenderComponent from './RenderComponent';
import { ProcessConsumer } from '../../../contexts/process';
import { AnimatePresence } from 'framer-motion';

const AppsLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ processes }) => (
      <AnimatePresence>
        {Object.entries(processes)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_id, { closing }]) => !closing)
          .map(([id, { Component, hasWindow }]) => (
            <RenderComponent key={id} Component={Component} hasWindow={hasWindow} id={id} />
          ))}
      </AnimatePresence>
    )}
  </ProcessConsumer>
);

export default AppsLoader;
