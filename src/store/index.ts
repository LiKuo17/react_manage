import {legacy_createStore, combineReducers} from "redux";
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
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

export default store