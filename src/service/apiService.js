import api from "./api";

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


// Login User 
export const loginUserAPIService=async(data)=>{
  const res=await api.post(`/user-login`,data,{ withCredentials: true });
  return res.data
}