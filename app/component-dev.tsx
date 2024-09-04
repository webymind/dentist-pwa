// app/component-dev.tsx
'use client'

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const ComponentToRender = dynamic(() => import('../components/ComponentToRender'), {
  ssr: false,
});

export default function ComponentDev() {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'r') {
        setKey(prevKey => prevKey + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Component Development Page</h1>
      <ComponentToRender key={key} />
    </div>
  );
}