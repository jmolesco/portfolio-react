import * as actionTypes from './actionTypes';
import commandHelper from './helperactions/commandHelper';

export const contactUsInsertFulFilled=(param)=>({
    type:actionTypes.INSERT,
    payload:commandHelper(param)
});