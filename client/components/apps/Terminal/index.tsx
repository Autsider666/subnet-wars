import { Window } from './style';
import { useRef, useState } from 'react';

type Line = {
  key: number;
  message: string;
  self?: boolean;
};

const Terminal = (): JSX.Element => {
  const [lines, setLines] = useState<Line[]>([]);
  const handleUserInput = (event: KeyboardEvent): void => {
    if (event.key !== 'Enter') {
      return;
    }

    setLines([...lines, { message: event.target?.['innerText'], key: lines.length, self: true }]);
    event.target.innerText = '';
    event.preventDefault();
  };
  const userInputRef = useRef<HTMLDivElement | null>(null);
  return (
    <Window onClick={() => userInputRef?.current?.focus()}>
      <div>
        {lines.map(({ key, message }) => (
          <div key={key}>{message}</div>
        ))}
      </div>
      <div className="userInput">
        $
        <span
          role="textbox"
          tabIndex="0"
          contentEditable
          onKeyDown={handleUserInput}
          ref={userInputRef}
        />
      </div>
    </Window>
  );
};

export default Terminal;
