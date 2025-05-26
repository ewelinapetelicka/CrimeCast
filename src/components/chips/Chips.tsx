import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';

interface ChipsProps {
  value: string[];
  label: string;
  onValueChange: (newValue: string[]) => void;
}

export function Chips(props: ChipsProps) {
  const [text, setText] = useState<string>();

  function addNewValue(newValue: string) {
    props.onValueChange([...props.value, newValue]);
    setText('');
  }

  function removeValue(removedValue: string) {
    props.onValueChange(props.value.filter((el) => el !== removedValue));
  }

  return (
    <section className={'flex flex-col w-full'}>
      <div className={'uppercase'}>{props.label}</div>
      <article
        className={
          'flex gap-1 shadow-inner shadow-zinc-500 rounded bg-zinc-600 items-center justify-start pl-1'
        }
      >
        {props.value.map((el) => {
          return (
            <div className={'h-5/6 bg-zinc-500 rounded-xl flex items-center gap-2 pr-2 pl-2'}>
              <span>{el}</span>
              <button onClick={() => removeValue(el)}>
                <IoIosClose />
              </button>
            </div>
          );
        })}
        <input
          className={'w-full focus:outline-0 bg-transparent h-9 text-neutral-50'}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addNewValue(text!);
            }
          }}
          value={text}
          onChange={(event) => setText(event.target.value)}
        ></input>
      </article>
    </section>
  );
}
