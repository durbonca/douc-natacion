'use client'
import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import List from './components/List';

export default function Home() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="container my-12 mx-auto">
      <div className='flex justify-end'>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input type="checkbox" value="synthwave" class="toggle theme-controller" data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>

      <p className='mb-8'>Por Favor anotate en la lista al dia de la semana correspondiente:</p>
      <div className="flex gap-4">
        <List />
        <List />
      </div>
    </div>
  );
}
