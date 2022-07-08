import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};

const LayoutWrap = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 10px;
  margin: 100px auto;
  height: auto;

  ${props => props.theme.mq.tablet} {
    max-width: 460px;
  }
`;

export default Layout;
