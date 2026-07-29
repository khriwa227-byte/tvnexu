import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import LegalPage from './pages/LegalPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalPage doc="privacy" />
  </StrictMode>,
);
