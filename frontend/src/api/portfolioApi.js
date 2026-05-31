import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 8000,
});

export const getProjects = async () => {
  const response = await api.get('/projects');
  return response.data;
};

export const getSkills = async () => {
  const response = await api.get('/skills');
  return response.data;
};

// Example secure request flow:
// 1. POST /api/auth/token with { username: 'admin', password: 'portfolio123' }
// 2. Send Authorization: Bearer <token> to /api/admin/health
export const getDemoToken = async () => {
  const response = await api.post('/auth/token', {
    username: 'admin',
    password: 'portfolio123',
  });
  return response.data.token;
};

export const checkSecureHealth = async (token) => {
  const response = await api.get('/admin/health', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
