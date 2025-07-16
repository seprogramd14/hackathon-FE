import styled from '@emotion/styled';
import { type ButtonHTMLAttributes } from 'react';
import { theme } from '../styles/theme';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  width: number;
  height: number;
  color: 'gray' | 'red';
  children: React.ReactNode;
}

export const Button = ({
  width,
  height,
  color,
  children,
  ...props
}: PropsType) => {
  return (
    <Wrapper width={width} height={height} color={color} {...props}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button<PropsType>`
  width: ${({ width }) => width + 'px'};
  height: ${({ height }) => height + 'px'};
  color: white;
  background-color: ${({ color }) =>
    color === 'gray' ? theme.color.gray[500] : theme.color.red[300]};
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  transition: 0.2s linear;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transition: 0.05s linear;
    filter: brightness(0.9);
  }
`;
