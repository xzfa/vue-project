import axios from 'axios'

const http = axios.create({
    baseURL:'/api',
    //通用请求的地址前缀
    timeout: 10000,
    //请求超时
})

http.interceptors.request.use(function(config){
    //在请求前做些什么
    return config;
},function(error){
    return Promise.reject(error);
});

http.interceptors.response.use(function(response){
    //对响应做些什么
    // console.log(response)
    return response;
},function(error){
    return Promise.reject(error);
});


export default http