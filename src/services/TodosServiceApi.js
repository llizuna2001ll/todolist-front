import axios from 'axios';
import JwtService from './JwtService';

const API_URL = "https://immense-beyond-20928-22d260974026.herokuapp.com/api/users";

const getToken = () => {
    return localStorage.getItem('jwt');
};

const getUserId = () => {
    return JwtService.getUserIdFromToken(getToken())
}

const TodoService = {
    getAllTodos: () => {
        const token = getToken();
        const userId = getUserId();
        return axios.get(`${API_URL}/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
    },

    getTodoById: (todoId) => {
        const token = getToken();
        return axios.get(`${API_URL}/${todoId}`, { headers: { Authorization: `Bearer ${token}` } });
    },

    createTodoForUser: (todo) => {
        const token = getToken();
        const userId = getUserId();
        return axios.post(`${API_URL}/addTodo/${userId}`, todo, { headers: { Authorization: `Bearer ${token}` } });
    },
    
    updateTodoForUser: (todoId, todo) => {
        const token = getToken();
        const userId = getUserId();
        return axios.put(`${API_URL}/${userId}/${todoId}`, todo, { headers: { Authorization: `Bearer ${token}` } });
    },

    deleteTodoById: (todoId) => {
        const token = getToken();
        return axios.delete(`${API_URL}/${todoId}`, { headers: { Authorization: `Bearer ${token}` } });
    },

    updateTodoProgress: (todoId, progress) => {
        const token = getToken();
        return axios.patch(`${API_URL}/${todoId}?progress=${progress}`, null, { headers: { Authorization: `Bearer ${token}` } });
    },
};

export default TodoService;
