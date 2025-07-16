import styled from '@emotion/styled';
import { theme } from '../styles/theme';

type PropsType = {
  size?: number;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
  children: string;
};

export const Text = ({
  size = 16,
  weight = 400,
  color = theme.color.gray[500],
  children,
}: PropsType) => {
  return (
    <Wrapper size={size} weight={weight} color={color}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span<PropsType>`
  font-size: ${({ size }) => size + 'px'};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
`;
