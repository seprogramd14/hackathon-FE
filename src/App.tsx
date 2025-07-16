import { RouterProvider } from 'react-router-dom';
import { StyledProvider } from './styles/StyledProvider';
import { router } from './router';
import { CurriculumProvider } from './contexts/CurriculumContext';

export const App = () => {
  return (
    <StyledProvider>
      <CurriculumProvider>
        <RouterProvider router={router} />
      </CurriculumProvider>
    </StyledProvider>
  );
};
