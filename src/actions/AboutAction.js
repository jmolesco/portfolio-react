import * as actionTypes from './actionTypes';
import commandHelper from './helperactions/commandHelper';

export const aboutGetFulFilled=(param)=>({
    type:actionTypes.FETCH,
    payload:commandHelper(param)
});