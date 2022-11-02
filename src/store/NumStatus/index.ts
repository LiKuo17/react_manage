export default {
    state: {
        num:20
    },
    actions: {
        add1(newState:{num:number},action:{type:string}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,val:number}){
            newState.num += action.val
        }
    },
    //名字统一管理
    add1: "add1",
    add2: "add2"
}