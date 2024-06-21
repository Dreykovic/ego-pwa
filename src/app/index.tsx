import React, { useEffect } from 'react';
import { themeChange } from 'theme-change';

import AppProvider from './providers';
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {
  useEffect(() => {
    // Initialisation des thèmes de Daisy UI
    themeChange(false);
  }, []);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppProvider />;
    </ErrorBoundary>
  );
};

export default App;
