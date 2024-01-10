'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from './_lib/registry';
import theme from './_styles/theme';

const AllProviders = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      {/* <Providers> */}
      <ThemeProvider theme={theme}>
        <SessionProvider session={props.session}>
          {props.children}
        </SessionProvider>
      </ThemeProvider>
      {/* </Providers> */}
    </StyledComponentsRegistry>
  );
};

export default AllProviders;
