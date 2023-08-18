import axios from "axios"

const setUrl = () => {
  if ((process.env.NODE_ENV as string) === "PRODUCTION") {
    return process.env.NODE_ENV
  } else {
    return process.env.NODE_ENV
  }
}

const axiosPublic = axios.create({
  baseURL: setUrl(),
})

const axiosPrivate = axios.create({
  baseURL: setUrl(),
  withCredentials: true,
})

axiosPrivate.defaults.headers.common["Content-Type"] = "application/json"

axiosPrivate.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("jwt") || "{}")

    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { axiosPublic, axiosPrivate }
