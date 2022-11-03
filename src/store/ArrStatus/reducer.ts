import handle from "./index";
let reducer = (state = {...handle.state }, action:{ type:string, 
    val:number }) => {
    let newState = JSON.parse(JSON.stringify(state))
    // 【优化】
    for(let key in handle.actionNames) {
        if(action.type === handle.actionNames[key]){
            handle.actions[handle.actionNames[key]](newState,action);
            break;
        }
    }
    return newState
}
export default reducer