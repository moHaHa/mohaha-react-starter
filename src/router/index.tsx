import { createBrowserRouter } from 'react-router-dom';
import { devRoutes } from '~/modules/dev/routes';
import { moduleRoutes } from '~/modules/module/routes';
export const router = createBrowserRouter([moduleRoutes, devRoutes]);
