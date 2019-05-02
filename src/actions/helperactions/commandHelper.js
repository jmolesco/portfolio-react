import * as urlProvider from './urlHelper';
import axios from 'axios';
export function parentAxios(url, methodType, parameter,header){
    return axios({
        url:url,
        method:methodType,
        data:parameter,
        //async:false,
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        }
    });
}
export default function crudAxiosCommand(parameter){
    let url = urlProvider.URL + parameter.urlName;
    return parentAxios(url, parameter.methodType, parameter.data, parameter.header);
};