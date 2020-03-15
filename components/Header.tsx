import React, {FC} from 'react';
import Link from 'next/link';
import styled from 'styled-components'

const HeaderLink = styled.a`
  font-family: Arial;
  font-size: 25px;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  background: transparent;
  border-bottom: 3px grey solid;
  margin: 0 1em;
  padding: 1em 0;
`;

const Header: FC = () => (
  <HeaderWrapper>
    <Link href="/">
      <HeaderLink>Latest posts</HeaderLink>
    </Link>
    <Link href="/new">
      <HeaderLink>New post</HeaderLink>
    </Link>
  </HeaderWrapper>
);

export default Header;
