import axios from 'axios';

const API = axios.create({ baseURL: 'https://map-file-upload-server.vercel.app', headers:{
  'X-Requested-With': 'XMLHttpRequest'
  }
});

// GET APIS
export const getSignedUrl = (fileName, fileType) => API.get('/getSignedUrl', {
  params:
  {
    file: fileName,
    type: fileType
  }
});
export const allJobs = () => API.get('/all_jobs');
export const resolveJob = (job_id) => API.get(`/jobs/resolve/${job_id}`);
export const removeJob = (job_id) => API.get(`/jobs/remove/${job_id}`);
export const getCheckoutUrl = (auth0_sub) => API.get(`/create_checkout_session/${auth0_sub}`);
export const getUserInfo = (sub) => API.get(`/get_user/${sub}`);

// POST APIs
export const newJob = (body) => API.post(`/new_job`, body);
export const sendVerificationEmail = (body) => API.post(`/send_verification_email`, body);

const FLASK_API = axios.create({ baseURL: 'https://chatbot-flask-server-5bfac58ae280.herokuapp.com'});

// POST APIs
export const getResponse = (body) => FLASK_API.post(`/get_response`, body);
export const getRoadLength = (body) => FLASK_API.post(`/road_length`, body);