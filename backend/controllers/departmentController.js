import Department from "../models/departmentModel.js";

const getDepartments=async(req,res)=>{
    try{
      const departments= await Department.find()
      return res.status(200).json({success:true,departments})
    }catch(error){
      return res.status(500).json({success:false,error:"get department server error"})
    }
}
const addDepartment = async (req, res) => {
  try {
    const { dep_name, description } = req.body;

    // Check if both fields are provided
    if (!dep_name || !description) {
      return res.status(400).json({ success: false, error: "Both department name and description are required." });
    }

    // Create a new department document
    const newDep = new Department({
      dep_name,
      description
    });

    // Save the department to the database
    await newDep.save();

    // Return success response
    return res.status(201).json({ success: true, department: newDep });
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);

    // Return error response
    return res.status(500).json({ success: false, error: "Failed to add department." });
  }
};
const getDepartment =async(req,res)=>{
    try{
      const {id} =req.params;
      const department=await Department.findById({_id:id})

      return res.status(200).json({success:true,department})
    }catch (error){
      return res.status(500).json({success:false,error:"get department server error"})
    }
}
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name, description } = req.body;

    // Check if the ID is valid
    if (!id) {
      return res.status(400).json({ success: false, error: "Invalid department ID" });
    }

    // Use `findByIdAndUpdate` to update the document
    const updatedDep = await Department.findByIdAndUpdate(
      id, // Find the document by ID
      { dep_name, description }, // Update these fields
      { new: true, runValidators: true } // Options: return the updated document & run schema validations
    );

    if (!updatedDep) {
      return res.status(404).json({ success: false, error: "Department not found" });
    }

    return res.status(200).json({ success: true, department: updatedDep });
  } catch (error) {
    console.error("Error in updateDepartment:", error);
    return res.status(500).json({ success: false, error: "Edit department server error" });
  }
};

export { addDepartment,getDepartment,getDepartments,updateDepartment };
