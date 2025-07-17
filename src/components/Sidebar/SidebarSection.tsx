import React, { useState } from 'react';
import styled from '@emotion/styled';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  title: string;
  time?: string;
  children?: React.ReactNode;
  collapsible?: boolean;
}

const SectionContainer = styled.div`
  margin-bottom: 10px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const SectionTitle = styled.span`
  font-size: 16px;
`;

const SectionTime = styled.span`
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 8px;
`;

const CollapseIcon = styled.span<{ isCollapsed: boolean }>`
  margin-left: auto; /* Push to the right */
  transform: ${(props) => (props.isCollapsed ? 'rotate(-90deg)' : 'none')};
  transition: transform 0.2s ease-in-out;
`;

const SectionContent = styled.div<{ isCollapsed: boolean }>`
  display: ${(props) => (props.isCollapsed ? 'none' : 'block')};
`;

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, time, children, collapsible = true }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <SectionContainer>
      <SectionHeader onClick={toggleCollapse}>
        <SectionTitle>{title}</SectionTitle>
        {time && <SectionTime>{time}</SectionTime>}
        {collapsible && <CollapseIcon isCollapsed={isCollapsed}>V</CollapseIcon>}
      </SectionHeader>
      <SectionContent isCollapsed={isCollapsed}>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default SidebarSection;
