import { useReducer } from "react"

// 解释：一个 action 对应一个功能
// 比如：计数器加1，这就是一个功能，这也是一个 action
//      计数器减1，这又是一个功能，这也是一个 action
type ActionType = { type: 'increment' } | { type: 'decrement' }
// 处理 useReducer 对应的状态逻辑代码
const reducer = (state: number, action: ActionType) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            return state
    }
}
const ReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, 10)

    return <div>
        <h1>ReducerComponent-{state}</h1>
        <button onClick={() => { dispatch({ type: 'increment' }) }}>+1</button>
        <button onClick={() => { dispatch({ type: 'decrement' }) }}>-1</button>
    </div>
}
export default ReducerComponent
