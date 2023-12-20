'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './_lib/registry';
import theme from './_styles/theme';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <SessionProvider session={props.session}>
          {props.children}
        </SessionProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
