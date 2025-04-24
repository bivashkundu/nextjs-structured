import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles';
import React, { createContext, useMemo, useState } from 'react';
import { MuiThemeOptions } from './_muiTheme';
import GlobalStyling from './globalStyles';

type ThemeModeContextType = {
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
  mode: 'light',
  toggleMode: () => {},
});

// Mui theme set up provider for whole application

const MuiThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    return createTheme(MuiThemeOptions(mode));
  }, [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={() => GlobalStyling(theme)} />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeModeContext.Provider>
  );
};

export default MuiThemeProvider;
