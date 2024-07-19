import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let state: any[] = []
let hookIndex = 0

// 模拟useState
const useState = (initialState: number) => {
    state[hookIndex] = state[hookIndex] || initialState
    let currentHookIndex = hookIndex// 把索引存起来
    const setState = (value: number) => {
        state[currentHookIndex] = value
        render()
    }
    // 类型
    type UseStateType = [number, (value: number) => void]
    const ret: UseStateType = [state[currentHookIndex], setState]
    hookIndex++
    return ret
}

// 模拟useEffect
const useEffect = (callback: () => void, deps?: any[]) => {
    // 此处的 state 数组，前面的是 useState 使用的，后面的是 useEffect 使用，此处索引0,1是 useState ；2或以后得就是 useEffect 使用
    console.log('useEffect', hookIndex, state)
    const lastDeps = state[hookIndex]

    let hasNoDeps = false// 有没有依赖项
    let hasDepsChanged = false// 依赖项目有没有改变
    // 没有依赖项目，对应第二个参数为undefined
    if (!deps) {
        hasNoDeps = true
    } else {
        // 如果上一次依赖性为空，说明是第一次执行 useEffect ，对应第二个参数为[]
        if (!lastDeps) {
            hasDepsChanged = true
        } else {
            // 通过som方法的返回值来表示依赖顶是否发生改变
            // 约定：返回true表示发生了变化，返回false表示没有发生
            hasDepsChanged = deps.some((v, i) => {
                return v !== lastDeps[i]
            })
        }
    }
    if (hasNoDeps || hasDepsChanged) {
        callback()
        // 将最新的依赖项保存到 state 变量中
        state[hookIndex] = deps
    }
    hookIndex++
}

const CustomUseStateContainer = () => {
    const [count, setCount] = useState(100)
    const [age, setAge] = useState(10)

    useEffect(() => {
        console.log(1, 'effect', undefined)
    })
    useEffect(() => {
        console.log(2, 'effect', [])
    }, [])
    useEffect(() => {
        console.log(3, 'effect', '[count]')
    }, [count])

    return (
        <div style={{ backgroundColor: 'pink', padding: 10 }}>
            <h1>计数器：{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <hr />
            <h1>年龄：{age}</h1>
            <button onClick={() => setAge(age + 1)}>+1</button>
        </div>
    )
}

const render = () => {
    /* const root = ReactDOM.createRoot(
        document.getElementById('App') as HTMLElement
    ); */
    root.render(<CustomUseStateContainer />);
    hookIndex = 0
}
export default CustomUseStateContainer