import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { Experiences } from './components/Experiences';
import { References } from './components/References';
import { Leadership } from './components/Leadership';
import { Projects } from './components/Projects';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/index.html', element: <Home /> },
  { path: '/education', element: <Education /> },
  { path: '/education.html', element: <Education /> },
  { path: '/experiences', element: <Experiences /> },
  { path: '/experiences.html', element: <Experiences /> },
  { path: '/references', element: <References /> },
  { path: '/references.html', element: <References /> },
  { path: '/leadership', element: <Leadership /> },
  { path: '/leadership.html', element: <Leadership /> },
  { path: '/projects', element: <Projects /> },
  { path: '/projects.html', element: <Projects /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;