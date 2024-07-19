import React, { memo, useState, useRef } from 'react'
import { ReactDOM } from 'react'

type ChildProps = {
    user: { age: number }
}

const Child = memo(({ user }: ChildProps) => {
    console.log('Child 组件更新')
    return (
        <div style={{ backgroundColor: '#abc', padding: 5 }}>
            子组件2 - 年龄：{user.age}
        </div>
    )
})

const UseRefContainer = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('pink')

    // const user = { age: 18 }
    // const userRef = useRef({ age: 18 })

    // 验证.：对象中包含 state/props 这样的可变数据时
    // 错误演示：
    // 
    const userRef = useRef({ age: count })
    const countRef = useRef(count)
    // 展示 count 值
    const showCount = () => {
        setTimeout(() => {
            console.log('展示 count 值：', count)
            console.log('展示 count 最新值：', countRef.current)
        }, 3000);
    }
    // +1
    const onClick = () => {
        console.log('1 click')
        // 最新值：count + 1，那么，count 就是以上一次的值（对于下次一来说）
        const newCount = count + 1
        // 获取最新值：
        // countRef.current = newCount
        // 获取上一次的值：
        countRef.current = count

        setCount(newCount)
    }
    return (
        <div style={{ backgroundColor: theme, padding: 10 }}>
            <button onClick={() => setTheme(theme === 'pink' ? 'white' : 'pink')}>切换主题</button>

            <h1>计数器：{count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <hr />
            {/* 子组件 */}
            <Child user={userRef.current} />
        </div>
    )
}
export default UseRefContainer