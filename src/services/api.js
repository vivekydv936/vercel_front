const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const checkBackendStatus = async () => {
    const response = await fetch(`${API_URL}/api/`);
    return response.json();
}; 