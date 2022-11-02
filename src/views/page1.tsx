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
        dispatch({type: "add2",val: 10})
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
            <button onClick={changeNum}>按钮</button>
            <button onClick={changeArr}>按钮</button>
            <p>{sarr}</p>
        </div>
    )
}
export default View