import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx';
import EmployeeDashboard from './pages/EmployeeDashboard.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx'
import RoleBasedRoute from './utils/RoleBasedRoute.jsx'
function App() {


  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route>
  <Route path="/login" element={<Login/>}
  ></Route>
  <Route path="/admin-dashboard" element={
    <PrivateRoute>
    <RoleBasedRoute requiredRole={['admin']}><AdminDashboard/></RoleBasedRoute>
    </PrivateRoute>
   }></Route>
  <Route path="/employee-dashboard" element={<EmployeeDashboard/>}></Route>
  

  </Routes>
  </BrowserRouter>
  )
}

export default App
