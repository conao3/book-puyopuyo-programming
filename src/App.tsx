import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const rootPage = import.meta.glob('./pages/page.tsx');
const stagePages = import.meta.glob('./pages/*/page.tsx');

const pageRoutes = [
  ...Object.entries(rootPage).map(([path, component]) => {
    const Component = lazy(
      component as () => Promise<{ default: React.ComponentType }>,
    );
    return { path: '/', Component };
  }),
  ...Object.entries(stagePages).map(([path, component]) => {
    const stageName = path.replace('./pages/', '').replace('/page.tsx', '');
    const routePath = `/${stageName}`;
    const Component = lazy(
      component as () => Promise<{ default: React.ComponentType }>,
    );
    return { path: routePath, Component };
  }),
];

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {pageRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  );
}
