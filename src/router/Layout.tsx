import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Logo } from '../components/Logo';

export const Layout = () => {
  return (
    <React.Fragment>
      <OutletContainer>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Outlet />
      </OutletContainer>
    </React.Fragment>
  );
};

const OutletContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoWrapper = styled.div`
  position: fixed;
  left: 24px;
  top: 28px;
`;
