import * as actionTypes from '../actions/actionTypes';
import * as commandType from '../actions/CommandType';
export default function ContactUsInsertReducer(
    state='',
    action // {type, payload} other ways of accessing it
)
{
    
    switch(action.type)
    {
        case actionTypes.INSERT_PENDING:
            return {
                inserting:true,
                inserted:false,
                failed:false,
                loading:true,
                error:null,
                actionEvent:commandType.INSERT
            };
        case actionTypes.INSERT_FULFILLED:
            return{
                inserting:false,
                inserted:true,
                failed:false,
                loading:false,
                actionEvent:commandType.INSERT
            };
        case actionTypes.INSERT_REJECTED:
            return {
                error:action.payload.response.data,
                inserting:false,
                inserted:false,
                failed:true,
                actionEvent:commandType.INSERT
            };
        default:
            return state;
    }
}