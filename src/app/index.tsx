import React, { useEffect, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { themeChange } from 'theme-change';

const AppProvider = lazy(() => import('./providers'));

const App: React.FC = () => {
  useEffect(() => {
    // Initialisation des thèmes de Daisy UI
    themeChange(false);
  }, []);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppProvider />
    </ErrorBoundary>
  );
};

export default App;
