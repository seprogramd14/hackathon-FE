import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';

export const CurriculumLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
      <RightSidebar />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;
