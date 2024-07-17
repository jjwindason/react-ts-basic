import React, { useState, useRef } from "react"

// 属性类型
type Props = {
    onAddTodo(text: string): void
}
const TodoAdd = (props: Props) => {
    // useRef
    const inputRef = useRef<HTMLInputElement>(null)// 默认设置null，当dom加载后，就不是null
    const [text, setText] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        /* 
            注意： keyCode 属性将来会被废弃凋用，因此，在 TS 中使用的时候，会有一个中横线，可以使用下面code属性来代替
        */
        if (e.keyCode === 13 || e.code === 'Enter') {// 回车；keyCode横线表示已弃用
            if (!text.trim()) return
            props.onAddTodo(text)
            // 清空文本框
            setText('')


            // useRef 测试
            /* 
                此处，我比TS更加明确inputRef.current这个属性的类型
                因此，我门可以通过αs来进行类型断言，也就是指定一个更加具体的类型
            */
            // const inputDOM = inputRef.current as HTMLInputElement
            // const inputDOM = inputRef.current!
            // 非空断言“!”
            // 作用：断言其操作内容是非nuLL且非undefined
            // console.log(inputRef.current!.value)
            // console.log((inputRef.current as HTMLInputElement).value)
            // console.log(inputDOM.value)
            // if (!inputDOM.value.trim) return
            // props.onAddTodo(inputDOM.value)
        }
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input ref={inputRef} className="new-todo" type="text" onChange={onChange} value={text} onKeyDown={onAdd} />
        </header>
    )
}
export default TodoAdd