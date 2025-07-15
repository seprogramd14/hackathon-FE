import { RouterProvider } from 'react-router-dom';
import { StyledProvider } from './styles/StyledProvider';
import { router } from './router';

export const App = () => {
  return (
    <StyledProvider>
      <RouterProvider router={router} />
    </StyledProvider>
  );
};
