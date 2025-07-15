import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ModalBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: ${theme.zIndex.modal};
  // 8자리 HEX 더한 두 자리는 16진수 투명도 값
  background-color: ${theme.color.gray[500] + '80'};
  backdrop-filter: blur(12px);
`;
