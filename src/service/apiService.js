import api from "./api";

// Login User
export const loginUserAPIService = async (data) => {
  const res = await api.post(`/user-login`, data, { withCredentials: true });
  return res.data;
};

// Logout User
export const logoutUserAPIService = async () => {
  const res = await api.post("/user-logout");
  return res.data;
};

// Get All User

export const getAllUser = async () => {
  const res = await api.get("/user");
  return res.data;
};

// Get all blogs
export const getBlogsAPIService = async () => {
  const res = await api.get("/get-blog");
  return res.data;
};

// Get single Blog
export const getDetailBlogsAPIService = async (slug) => {
  const res = await api.get(`/get-blog/${slug}`);
  return res.data;
};

// Save Enquery Form Data
export const createEnqueryFormDataAPIService = async (data) => {
  const res = await api.post(`/create-contact`, data);
  return res.data;
};

// Get Enquery Data
export const getEnquiryFormDataAPIService = async () => {
  const res = await api.get(`/get-contact`);
  return res.data;
};

// Get Single Enquiry Data
export const getSingleEnquiryFormDataAPIService = async (id) => {
  const res = await api.get(`/get-contact/${id}`);
  return res.data;
};

// delete Enquiry Form Data
export const deleteEnquiryFormDataAPIService = async (id) => {
  const res = await api.delete(`/delete-contact/${id}`);
  return res.data;
};

// // Create blog Post
export const createBlogPostAPIService = async (formData) => {
  const res = await api.post("/create-blog", formData, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });
  return res.data;
};

// Delete Blog
export const deleteBlogPostAPIService=async(id)=>{
  const res=await api.delete(`/delete-blog/${id}`)
  return res.data
}
// Update Blog
export const updateBlogPostAPIService=async(id,data)=>{
   const res = await api.put(`/update-blog/${id}`, data);
  return res.data;
}

// Dashboard Data
export const dashboardDataAPIService=async()=>{
  const res=await api.get('/dashboard')
  return res.data
}