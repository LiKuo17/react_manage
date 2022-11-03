import { useSelector,useDispatch } from "react-redux"

//ts中提供了ReturnType,用来获取函数类型的返回值
const View = () => {
    //对num的操作
    //通过useSelector获取仓库数据
    const {num} = useSelector((state:RootState)=>({
        num: state.handleNum.num
    }))

    //通过useDispatch修改仓库数据
    const dispatch = useDispatch()
    const changeNum = () => {
        // dispatch({type: "字符串(认为是一个记号)",val: 3}) type是固定的 val是自定义的
        // dispatch({type: "add1"})
        dispatch({type: "add3",val: 200})
    }
    const changeNum2 = () => {
        // dispatch({type: "字符串(认为是一个记号)",val: 3}) type是固定的 val是自定义的
        // dispatch({type: "add1"})
        // dispatch({type: "add1",val: 100})
        //异步的写法  redux-thunk的用法     基本格式： dispatch(异步执行的函数)
        dispatch((dis: Function)=>{
            setTimeout(()=>{
                dis({type:"add1"})
            },1000)
        })
    }
    const changeArr = () => {
        dispatch({type:"sarrpush",val:100})
    }
    //对sarr的操作
    const {sarr} = useSelector((state:RootState)=>({
        sarr: state.handleArr.sarr
    }))

    return (
        <div className="home">
            <p>这是page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>同步按钮</button>
            <button onClick={changeNum2}>异步按钮</button>

            <button onClick={changeArr}>按钮</button>
            <p>{sarr}</p>
        </div>
    )
}
export default View