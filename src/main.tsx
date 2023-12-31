import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import 'virtual:uno.css';
import './index.css';
import { router } from './router';

const container = document.getElementById('root');
createRoot(container!).render(<RouterProvider router={router} />);
