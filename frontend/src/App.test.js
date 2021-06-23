import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('map-container');
  expect(linkElement).toBeInTheDocument();
});

const mockGeolocation = {
  getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
    Promise.resolve(
      success({
        coords: {
          latitude: 51.1,
          longitude: 45.3,
        },
      })
    )
  ),
};
global.navigator.geolocation = mockGeolocation;

const mockGeolocation1 = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn()
};

global.navigator.geolocation = mockGeolocation1;