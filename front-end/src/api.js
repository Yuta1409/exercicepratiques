import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export async function addTask(task) {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
}

export async function getTasks() {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
}

export async function updateTask(id, task) {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task);
  return response.data;
}

export async function deleteTask(id) {
  const response = await axios.delete(`${API_URL}/tasks/${id}`);
  return response.data;
}