import {legacy_createStore, combineReducers,compose,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import handleNum from "./NumStatus/reducer";
import handleArr from "./ArrStatus/reducer";

//组合各个模块的reducer
const reducers = combineReducers({
    handleNum,
    handleArr
})


//创建数据仓库
//为了让浏览器正常使用，redux-dev-tools正常使用
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt
const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))
export default store