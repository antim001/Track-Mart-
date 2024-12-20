import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Login from './pages/Login.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx';
import EmployeeDashboard from './pages/EmployeeDashboard.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx'
import RoleBasedRoute from './utils/RoleBasedRoute.jsx'
import AdminSummary from './components/AdminSummary.jsx'
import Department from './components/Department/Department.jsx'
import AddDepartment from './components/Department/AddDepartment.jsx'
import EditDepartment from './components/Department/EditDepartment.jsx'
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
   }>
   <Route index element={<AdminSummary/>}></Route>
   <Route path='/admin-dashboard/departments' element={<Department/>}></Route>
   <Route path='/admin-dashboard/add-department' element={<AddDepartment/>}></Route>
   <Route path='/admin-dashboard/department/:id' element={<EditDepartment/>}></Route>
   </Route>
  <Route path="/employee-dashboard" element={<EmployeeDashboard/>}></Route>
  
  

  </Routes>
  </BrowserRouter>
  )
}

export default App
