import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from '../components/App';

test('Check that test work as expected', async () => {
  // ARRANGE
  render(<App />);

  // ACT
  await userEvent.click(screen.getByText('count is 0'));

  // ASSERT
  expect(screen.getByText('count is 1')).toHaveTextContent('count is 1');
});
