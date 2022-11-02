import handleArr from "./index";

let reducer = (state = {...handleArr.state }, action:{ type:string, 
    val:number }) => {

    //调用dispatch执行这里的代码
    console.log("执行了reducer");
    
    let newState = JSON.parse(JSON.stringify(state))

    switch(action.type) {
        case handleArr.sarrpush:
            handleArr.actions[handleArr.sarrpush](newState,action)
            break;
        default:
            break;
    }
    return newState
}
export default reducer