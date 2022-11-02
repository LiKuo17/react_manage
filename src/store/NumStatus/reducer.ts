import handleNum from "./index";
let reducer = (state = {...handleNum.state }, action:{ type:string, 
    val:number }) => {

    //调用dispatch执行这里的代码
    console.log("执行了reducer");
    
    let newState = JSON.parse(JSON.stringify(state))

    switch(action.type) {
        case handleNum.add1:
            handleNum.actions["add1"](newState,action)
            break;
        case handleNum.add2:
            handleNum.actions["add2"](newState,action)
            break;
        default:
            break;
    }
    return newState
}
export default reducer