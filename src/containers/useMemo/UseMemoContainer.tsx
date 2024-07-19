import React, { useState, memo, useCallback, useMemo } from 'react'
// memo是高阶组件，useMemo是Hook

type Child2Props = {
    user: { age: number }
}
const Child2 = memo(({ user }: Child2Props) => {
    console.log('Child2 组件更新了')
    return <div style={{ backgroundColor: '#abc', padding: 5 }}>
        子组件2 - 年龄：{user.age}
    </div>
})

type ChildProps = {
    click: () => void
}
const Child = memo(({ click }: ChildProps) => {
    console.log('Child1 组件更新了')
    return <button onClick={click}>+10</button>
})

const UseMemoContainer = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('pink')

    // useCallback，使其包裹的函数引用一致，点击切换主题不会重新渲染
    /* const handleClick = useCallback(() => {
        console.log('useCallback 执行了')
        setCount(count + 10)
    }, [count]) */

    // useMemo 模拟 useCallback
    const handleClick = useMemo(() => {
        // 注意：此处的返回值，才是需要被记住的函数
        return () => {
            console.log('useMemo 模拟 useCallback 执行了')
            setCount(count + 10)
        }
    }, [count])

    // 使用 useMemo 来让该对象在组件更新期间保证引用相等
    // 注意：第一个参数（回调函数）的返回值，才表示要记住的数据
    const user = useMemo(() => {
        console.log('useMemo 执行了')
        return { age: count + 10 }
    }, [count])

    // 使用 useMemo 来记忆组件从而模拟 React.memo 高阶组件的功能
    const child = useMemo(() => {
        return <Child2 user={{ age: count + 10 }} />
    }, [count])
    return (
        <div style={{ backgroundColor: theme, padding: 10 }}>
            <button onClick={() => setTheme(theme === 'pink' ? 'white' : 'pink')}>切换主题</button>

            <h1>计数器：{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
            <hr />
            {/* 子组件 */}
            <Child click={handleClick} />
            <Child2 user={user} />
            {/* 渲染child，也就是<Child /> */}
            {child}
        </div>
    )
}
export default UseMemoContainer