import * as actionTypes from '../actions/actionTypes';
import * as commandType from '../actions/CommandType';
export default function AboutGetRecords(
    state='',
    action
)
{
    switch(action.type)
    {
        case actionTypes.FETCH_PENDING:{
            return {
                fetching:true,
                t:false,
                failed:false,
                loading:true,
                actionEvent:commandType.FETCH           
            };
        }
        case actionTypes.FETCH_FULFILLED:{
            return {
                list:action.payload.data.List,
                fetching:false,
                fetched:true,
                failed:false,
                loading:false,                
                actionEvent:commandType.FETCH
            };
        }
        case actionTypes.FETCH_REJECTED:{
            return{
                error:action.payload.response.data,
                fetching:false,
                fetched:false,
                failed:true,
                actionEvent:commandType.FETCH
            };
        }
        default:return state;
    }
}