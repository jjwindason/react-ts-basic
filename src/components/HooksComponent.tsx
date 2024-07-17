import React, { useState, useEffect } from "react"

const HooksComponent = () => {
    const [count, setCount] = useState(0)
    console.log('HooksComponent render')
    // 使用 useEffect 来进行 DOM 操作（side effect）
    /* 
        参数：回调函数（称为effect),就是在该函数中写副作用代码。
        执行时机：该 effect ，会在每次组件更新(DOM更新)后执行。
    */
    /* 
         ·effect的返回值也是可选的，可省略。也可以返回一个清理函数，用来执行事件解绑等清理操作。
         ·清理函数的执行时机：1【空数组没有依赖】组件卸载时2【有依赖项】effect重新执行前（暂时知道即可)。
         ·此时，相当于class组件的componentWillUnmount钩子函数的作用。
     */
    useEffect(() => {
        console.log(1)
        console.log('render every times after state update')
    })
    useEffect(() => {
        console.log(2, 'effect 执行')
        // 只执行一次，相当于class组件的componentDidMount

        return () => {
            // 只执行一次，相当于class组件的componentWillUnmount
            console.log('2-组件卸载')
        }
    }, [])
    useEffect(() => {
        console.log(3, 'effect 执行')
        console.log('[...]，相当监听，每次数组内属性变化都会执行')
        document.title = `当前点击${count}次`
        // 第一次会执行return上面的代码，依赖项变化后会先执行return内部的，再执行return上面的，直到组件卸载，就只执行了return内部，不会再执行return上面的
        return () => {
            console.log(3, '组件卸载了')
        }
    }, [count])
    // useEffect(function effect(){})
    return <div>
        <h1>{count}</h1>
        <button onClick={() => { setCount(count + 1) }}>+1</button>
    </div>
}
export default HooksComponent
