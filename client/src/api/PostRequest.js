import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const getTimelinePosts =(id) => API.get(`/post/${id}/timeline`);

export const likePost =(id,userId) => API.put(`post/${id}/like`, {userId:userId});
export const hugPost =(id,userId) => API.put(`post/${id}/hug`, {userId:userId});

