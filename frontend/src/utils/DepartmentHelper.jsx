import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const columns = [
  {
    name: "S. No",
    selector: (row) => row.sno,
  },
  {
    name: "Department Name",
    selector: (row) => row.dep_name,
    sortable:true
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = ({ _id, onDepartmentDelete }) => {
  const navigate = useNavigate();

  // Function to handle the delete operation
  const handleDelete = async (id) => {
    const confirm = window.confirm("Do you want to delete this department?");
    if (confirm) {
      try {
        const response = await axios.delete(`http://localhost:3000/api/department/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          alert("Department deleted successfully!");
          onDepartmentDelete(id); // Call the callback to update the department list
        }
      } catch (error) {
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error); // Show error from server
        } else {
          console.error("Error deleting department:", error); // Log any other errors
        }
      }
    }
  };

  return (
    <div className="flex space-x-3">
      {/* Edit button */}
      <button
        className="bg-teal-600 px-3 py-1 text-white"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        Edit
      </button>

      {/* Delete button */}
      <button
        className="bg-red-500 text-white px-3 py-1"
        onClick={() => handleDelete(_id)} // Correctly passing _id
      >
        Delete
      </button>
    </div>
  );
};
