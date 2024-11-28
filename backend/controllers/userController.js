export const registerUser = async(req,res)=>{
    res.status(200).json({ success: true, message: "registered successfully" })
}