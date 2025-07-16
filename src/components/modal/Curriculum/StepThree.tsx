import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';
import { Text } from '../../Text';
import { CurriculumModalBottomGroup } from '.';

const MAX_LEVEL = 3;

const getOutlineInfo = (line: string) => {
  // 들여쓰기, 번호, 구분자 추출
  const match = line.match(/^([ \t]*)(\d+(?:\.\d+){0,2}) - /);
  if (!match) return null;
  const indent = match[1] || '';
  const nums = match[2].split('.').map(Number);
  return { indent, nums };
};

export const StepThree = () => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = value.substring(0, start);
    const after = value.substring(end);
    const lines = before.split('\n');
    const currentLineIdx = lines.length - 1;
    const currentLine = lines[currentLineIdx];

    // Tab: 무조건 4칸 추가 + 위 목차에 편입
    if (e.key === 'Tab') {
      e.preventDefault();
      if (currentLineIdx > 0) {
        const prevLine = lines[currentLineIdx - 1];
        const prevInfo = getOutlineInfo(prevLine);
        if (prevInfo && prevInfo.nums.length < MAX_LEVEL) {
          // 위 목차에 편입, 레벨+1
          const newNums = [...prevInfo.nums, 1];
          const newLine = '    '.repeat(newNums.length - 1) + newNums.join('.') + ' - ';
          lines[currentLineIdx] = newLine;
          const newValue = lines.join('\n') + after;
          setValue(newValue);
          setTimeout(() => {
            const pos = lines.slice(0, currentLineIdx + 1).join('\n').length;
            textarea.selectionStart = textarea.selectionEnd = pos;
          }, 0);
          return;
        }
      }
      // 그냥 4칸 추가
      const newValue = value.substring(0, start) + '    ' + value.substring(end);
      setValue(newValue);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
      return;
    }

    // Enter: 목차 자동완성, 들여쓰기 유지, 3레벨까지, 목차 패턴 깨지면 빈 줄
    if (e.key === 'Enter') {
      const info = getOutlineInfo(currentLine);
      // 목차 패턴이면서 3레벨 이하
      if (info && info.nums.length <= MAX_LEVEL) {
        e.preventDefault();
        // 내용이 없으면(공백/탭/번호/ - 만 있으면) 부모로 빠져나오기
        if (/^[ \t]*[\d.]+ -[ \t]*$/.test(currentLine)) {
          if (info.nums.length > 1) {
            // 부모로 빠져나가서 번호 증가
            const parentNums = info.nums.slice(0, -1);
            parentNums[parentNums.length - 1] += 1;
            const newLine = '    '.repeat(parentNums.length - 1) + parentNums.join('.') + ' - ';
            lines[currentLineIdx] = newLine;
            const newValue = lines.join('\n') + after;
            setValue(newValue);
            setTimeout(() => {
              const pos = lines.slice(0, currentLineIdx + 1).join('\n').length;
              textarea.selectionStart = textarea.selectionEnd = pos;
            }, 0);
            return;
          } else {
            // 1레벨이면 다음 번호로
            const newLine = (info.nums[0] + 1) + ' - ';
            lines[currentLineIdx] = newLine;
            const newValue = lines.join('\n') + after;
            setValue(newValue);
            setTimeout(() => {
              const pos = lines.slice(0, currentLineIdx + 1).join('\n').length;
              textarea.selectionStart = textarea.selectionEnd = pos;
            }, 0);
            return;
          }
        } else {
          // 내용이 있으면 같은 레벨에서 번호 +1, 들여쓰기 유지
          info.nums[info.nums.length - 1] += 1;
          const newLine = info.indent + info.nums.join('.') + ' - ';
          const newValue = before + '\n' + newLine + after;
          setValue(newValue);
          setTimeout(() => {
            textarea.selectionStart = textarea.selectionEnd = start + 1 + newLine.length;
          }, 0);
          return;
        }
      }
      // 목차 패턴이 아니면 빈 줄
      e.preventDefault();
      const newValue = before + '\n' + after;
      setValue(newValue);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 1;
      }, 0);
      return;
    }
  };

  return (
    <Container>
      <TopBox>
        <Text size={24} weight={600}>
          마지막 단계에요!
        </Text>
        <TextArea
          ref={textareaRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="커리큘럼을 입력하세요"
        />
      </TopBox>
      <CurriculumModalBottomGroup />
    </Container>
  );
};

const Container = styled.div`
  width: 546px;
  height: 663px;
  background-color: ${theme.color.white};
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const TextArea = styled.textarea`
  width: 450px;
  height: 480px;
  border-radius: 4px;
  border: 1px solid ${theme.color.gray[200]};
  resize: none;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 24px;
`;
