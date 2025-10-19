import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const pages = import.meta.glob('./pages/*.tsx');

const pageRoutes = Object.entries(pages).map(([path, component]) => {
  const pageName = path.replace('./pages/', '').replace('.tsx', '');
  const routePath = pageName === 'Home' ? '/' : `/${pageName.toLowerCase()}`;
  const Component = lazy(
    component as () => Promise<{ default: React.ComponentType }>,
  );
  return { path: routePath, Component };
});

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
