import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditDepartment() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [department, setDepartment] = useState({
        dep_name: '',
        description: '',
    });
    const [depLoading, setDepLoading] = useState(false);

    useEffect(() => {
        const fetchDepartments = async () => {
            setDepLoading(true); // Start loading
            try {
                const response = await axios.get(`http://localhost:3000/api/department/${id}`, {
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
            } finally {
                setDepLoading(false); // End loading
            }
        };

        fetchDepartments(); // Call the fetch function
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment({ ...department, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!department.dep_name || !department.description) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('You are not authenticated. Please log in.');
                return;
            }

            const response = await axios.put(
                `http://localhost:3000/api/department/${id}`,
                department,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.success) {
                navigate('/admin-dashboard/departments');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error);
            } else {
                alert('An error occurred. Please try again.');
            }
        }
    };

    return (
        <>
            {depLoading ? (
                <div>Loading....</div>
            ) : (
                <div>
                    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
                        <h2 className="text-2xl font-bold mb-6">Edit Department</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="dep_name" className="text-sm font-medium text-gray-700">
                                    Department Name
                                </label>
                                <input
                                    type="text"
                                    name="dep_name"
                                    placeholder="Enter department name"
                                    className="mt-1 w-full p-2 border-gray-300 rounded-md"
                                    onChange={handleChange}
                                    value={department.dep_name}
                                    required
                                />
                            </div>
                            <div className="mt-3">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    onChange={handleChange}
                                    value={department.description}
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default EditDepartment;
