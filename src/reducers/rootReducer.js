import {combineReducers} from 'redux';
import contactusInsert from '../reducers/ContactUs';
import aboutRecords from '../reducers/About';

const rootReducer = combineReducers({
    contactusInsertReturnSet:contactusInsert,
    aboutGetRecords:aboutRecords
});
export default rootReducer;