import { useSelector } from 'react-redux';
import './App.css';
import UserRoutes from './pages/AllRoutes/UserRoutes';

function App() {
  const { isAuth, role } = useSelector((store) => store.authReducer);

  return (
    <div className='App'>
      {isAuth && role !== 'user' ? <AdminRoutes /> : <UserRoutes />}
    </div>
  );
}

export default App;
