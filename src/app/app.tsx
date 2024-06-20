import React, { useEffect } from 'react';

import { themeChange } from 'theme-change';

import AppProvider from './providers';

const App: React.FC = () => {
  useEffect(() => {
    // Initialisation des thèmes de Daisy UI
    themeChange(false);
  }, []);

  return <AppProvider />;
};

export default App;
