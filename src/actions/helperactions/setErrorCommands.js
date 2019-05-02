export function parentAxios(url, methodType, parameter,header){
    return axios({
        url:url,
        method:methodType,
        data:parameter,
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        }
    });
}
export default function setErrorCommands(parameter){
    console.log(parameter);
};