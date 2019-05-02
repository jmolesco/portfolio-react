import {createStore,  applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import {compose} from 'redux';
export default function configureStore()
{
    const allStoreEnhancer = compose(
        applyMiddleware(thunk, promiseMiddleware),
        window.devToolsExtension && window.devToolsExtension()
    )
    return createStore(
        rootReducer,
        allStoreEnhancer
    );
}