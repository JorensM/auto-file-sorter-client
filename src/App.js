import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import HomePage from './components/pages/HomePage';
import { JobPage, loader as jobPageLoader } from './components/pages/JobPage';
import { sample_jobs } from './sample_data';
import SettingsPage from 'components/pages/SettingsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/settings',
    element: <SettingsPage />
  },
  {
    path: 'jobs/:job_id',
    element: <JobPage />,
    loader: jobPageLoader
  }
])

function App() {

  return (
    <div className="App">
      <Header
        links={[
          {label: 'Home', href: '/'},
          {label: 'Settings', href: '/settings'}
        ]}
      />
      <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
