import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import FeedbackForm from '../pages/FeedbackForm';
import AdminDashboard from '../pages/AdminDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import StudentLogin from '../pages/StudentLogin';
import StudentRegister from '../pages/StudentRegister';
import Layout from '../components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'feedback',
        element: <FeedbackForm />,
      },
      {
        path: 'admin',
        element: <AdminDashboard />,
      },
      {
        path: 'student',
        element: <StudentDashboard />,
      },
      {
        path: 'login',
        element: <StudentLogin />,
      },
      {
        path: 'register',
        element: <StudentRegister />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]); 