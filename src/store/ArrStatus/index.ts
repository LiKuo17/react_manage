const store = {
    state: {
        num:20
    },
    actions: { 
        sarrpush(newState:{sarr:number[]},action:{type:string,val:number}){
            newState.sarr.push(action.val)
        },
    },
    //名字统一管理
    // actionNames: {
    //     add1: "add1",
    //     add2: "add2"
    // }
    actionNames:{}
}

//actionNames自动生成，不用每一次添加一个方法，都要在actionNames手动添加键值对。
let actionNames = {}    //定义一个全局的actionNames
//actionNames有多少键值对，取决于action里面有多少个函数吗，所以遍历store.actions,给actionNames添加键值对
for(let key in store.actions){
    actionNames[key] = key
}
store.actionNames = actionNames

export default store