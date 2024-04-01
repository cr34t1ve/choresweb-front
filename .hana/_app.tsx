import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter } from '@hanabira/router';

const _DASHBOARD_INDEX____ = import('../src/pages/dashboard/index.tsx');
const _INDEX____ = import('../src/pages/index.tsx');




const Application = React.lazy(() => import('../src/pages/_app'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Application>
      {createRouter({
        useLazy: true,
        usePageTransition: true,
        mode: 'history',
        routes: {
          routes: [
            { path: '/dashboard', component: _DASHBOARD_INDEX____, file: '/dashboard/index.tsx' },{ path: '', component: _INDEX____, file: '/index.tsx' }
          ],
          errorPages: [
            
          ],
          loadingPages: [
            
          ],
          layouts: [
            
          ],
          _404Page: { file: undefined, component: undefined },
        },
      })}
    </Application>
  </React.StrictMode>
);
