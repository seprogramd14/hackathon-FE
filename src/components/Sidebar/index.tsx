import React from 'react';
import styled from '@emotion/styled';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import { Logo } from '../Logo';

const SidebarContainer = styled.div`
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #eee;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

const SidebarSubtitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ActionButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const EditButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: auto; /* Push to the bottom */
  &:hover {
    background-color: #555;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarTitle>커리큘럼</SidebarTitle>
      <SidebarSubtitle>React 입문</SidebarSubtitle>
      <ButtonContainer>
        <ActionButton>하이라이트</ActionButton>
        <ActionButton>효율적으로 공부하기</ActionButton>
      </ButtonContainer>

      <SidebarSection title="1 - hook이란?" time="2h 51m">
        <SidebarItem level={1} text="1.1 - useState" time="24m" />
        <SidebarItem level={2} text="1.1.1 - prev" time="24m" />
        <SidebarItem level={2} text="1.1.2 - 비동기" completed={true} />
        <SidebarItem level={1} text="1.2 - useRef" />
      </SidebarSection>

      <SidebarSection title="2 - SPA란?" time="4m">
        <SidebarItem level={1} text="2.1 - CSR" />
        <SidebarItem level={1} text="2.2 - SSR" />
        <SidebarItem level={2} text="2.1.1 - NextJS" />
        <SidebarItem level={2} text="2.1.2 - 하이드레이션" />
      </SidebarSection>

      <EditButton>커리큘럼 수정</EditButton>
    </SidebarContainer>
  );
};

export default Sidebar;
