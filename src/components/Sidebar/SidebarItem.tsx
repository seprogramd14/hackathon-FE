import React from 'react';
import styled from '@emotion/styled';

interface SidebarItemProps {
  level: number;
  text: string;
  time?: string;
  completed?: boolean;
  onClick?: () => void;
}

const ItemContainer = styled.div<{ level: number; completed?: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  padding-left: ${(props) => 20 + props.level * 20}px; /* Adjust padding based on level */
  cursor: pointer;
  border-radius: 15px;
  &:hover {
    background-color: #f0f0f0;
  }
  color: ${(props) => (props.completed ? '#888' : 'inherit')};
`;

const ItemText = styled.span`
  font-size: 14px;
`;

const ItemTime = styled.span`
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  margin-left: 8px;
`;

const CheckIcon = styled.span`
  color: #4caf50;
  margin-left: 8px;
`;

const SidebarItem: React.FC<SidebarItemProps> = ({ level, text, time, completed, onClick }) => {
  return (
    <ItemContainer level={level} completed={completed} onClick={onClick}>
      <ItemText>{text}</ItemText>
      {time && <ItemTime>{time}</ItemTime>}
      {completed && <CheckIcon>✔</CheckIcon>}
    </ItemContainer>
  );
};

export default SidebarItem;
