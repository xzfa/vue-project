import http from "@/utils.js/request"

export const getData = () =>{
    return http.get('/home/getData')
}
