import React from 'react'
import {Link} from 'react-router-dom'
function AddDepartment() {
  return (
    <div>
     <div>
     <h3>Manage Departments</h3>
     </div>
     <div>
     <input type="text" placeholder='search by department name' />
     <Link to='/admin-dashboard/add-department'>Add New Department</Link>
     </div>
    </div>
  )
}

export default AddDepartment