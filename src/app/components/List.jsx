'use client'
import { useState } from 'react';

export default function List() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [...list, input];
    setList(newList);
    setInput('');
  };

  return (
    <div className="w-1/2">
      <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <label className='flex-1 text-nowrap' htmlFor="input">Escribe tu nombre: </label>
        <input
          id='input'
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button disabled={!input} type="submit" className="btn btn-primary">
          Anotarse
        </button>
      </form>
      <ul className='space-y-2'>
        {list.map((item, index) => (
          <li key={index} className="border-b-[1px] p-2">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}