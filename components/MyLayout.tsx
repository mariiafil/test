import React, {FC, ReactChildren, ReactNode} from 'react';
import Header from './Header';
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  font-family: Arial;
  margin: 0 1em;
`;

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <LayoutWrapper>
    <Header />
    {children}
  </LayoutWrapper>
);

export default Layout;
