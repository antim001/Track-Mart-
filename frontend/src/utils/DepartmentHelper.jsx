import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export const columns = [
    {
        name: "S. No",
        selector: (row) => row.sno,
    },
    {
        name: "Department Name",
        selector: (row) => row.dep_name,
    },
    {
        name: "Action",
        selector: (row) => row.action,
    },
];

export const DepartmentButtons = ({ _id }) => {
    const navigate = useNavigate();
    const handleDelete=async(id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/department/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.data.success) {
                setDepartment(response.data.department);
            }
        } catch (error) {
            if (error.response && !error.response.data.success) {
                alert(error.response.data.error);
            }
        }      
    }
    return (
        <div className="flex space-x-3">
            <button
                className="bg-teal-600 px-3 py-1 text-white"
                onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
            >
                Edit
            </button>
            <button className="bg-red-500 text-white px-3 py-1"
            onClick={()=>handleDelete(Id)}
            >Delete</button>
        </div>
    );
};
