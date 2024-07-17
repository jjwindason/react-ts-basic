import React, { useState, useEffect } from "react"
import TodoAdd from "../../components/Todos/hooks/TodoAdd"
// import TodoList from "../../components/Todos/hooks/TodoList"
// import TodoFooter from "../components/Todos/TodoFooter"
import MainSection from '../../components/Todos/hooks/MainSection'

import '../../assets/todos-index.css'
import '../../assets/todos-base.css'

import TodoContext from './TodoContext'// 引入

const initalState = [
    { id: 1, text: '吃饭', done: false },
    { id: 2, text: '休息', done: false },
]
const TodoContainer = () => {
    const [todos, setTodos] = useState(initalState)
    // 读取localStorage
    useEffect(() => {
        const res = localStorage.getItem('todos')
        if (res) {
            const resTodos = JSON.parse(res)
            setTodos(resTodos)
        }
    }, [])
    // 存储localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    // 添加任务
    const onAddTodo = (text: string) => {
        setTodos([...todos, {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            text: text,
            done: false
        }])
    }
    // 改变状态
    const onToggleTodo = (id: number) => {
        const newTodos = todos.map(v => {
            if (v.id === id) {
                return {
                    ...v,
                    done: !v.done
                }
            }
            return v
        })
        setTodos(newTodos)
    }
    // 删除
    const onDeleteTodo = (id: number) => {
        const newTodos = todos.filter(v => v.id !== id)
        setTodos(newTodos)
    }
    return (
        <section className="todoapp">
            {/* 添加任务 */}
            <TodoAdd onAddTodo={onAddTodo}></TodoAdd>
            {/* 提供共享数据 */}
            <TodoContext.Provider value={{ todos, onToggleTodo, onDeleteTodo }}>
                {/* 中间件，测试Context所用 */}
                <MainSection></MainSection>
            </TodoContext.Provider>
            {/* footer组件 */}

        </section>
    )
}
export default TodoContainer