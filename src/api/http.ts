import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

instance.interceptors.response.use(
  res => res,
  err => {
    alert(err.response?.data?.message || '请求出错')
    return Promise.reject(err)
  }
)

export default instance
