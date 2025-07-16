import { type InputHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { theme } from '../styles/theme';

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
}

export const Input = forwardRef<HTMLInputElement, InputType>(
  ({ width, onChange = () => console.log('change!'), ...props }, ref) => {
    return (
      <StyledInput {...props} width={width} onChange={onChange} ref={ref} />
    );
  }
);

const StyledInput = styled.input<InputType>`
  border-radius: 4px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  padding: 0 16px;
  height: 36px;
  background-color: ${theme.color.white};
  border: 1px solid ${theme.color.gray[200]};
  font-size: 14px;
  font-weight: 400;
  color: ${theme.color.gray[500]};
  &::placeholder {
    color: ${theme.color.gray[300]};
  }
`;
