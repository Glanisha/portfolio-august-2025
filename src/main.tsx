// main.tsx (or index.tsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Analytics } from '@vercel/analytics/react';   // use the plain React build

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />       {/* must be inside React tree, outside <App/> is fine */}
  </StrictMode>,
);
