import React from "react"
import TodoAdd from "../../components/Todos/class/TodoAdd"
import TodoList from "../../components/Todos/class/TodoList"
// import TodoFooter from "../components/Todos/TodoFooter"

// 导入 TodoItem 类型
import { TodoItem } from "../todos"
// TodoContainer 组件的状态类型
type Todos = {
    todos: TodoItem[]
}
const todos: TodoItem[] = [
    { id: 1, text: '吃饭', done: true },
    { id: 2, text: '休息', done: false },
]
class TodoContainer extends React.Component<{}, Todos> {
    state: Todos = {
        todos
    }
    addTodo = (text: string) => {
        const { todos } = this.state
        const id = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
        this.setState({
            todos: [...todos,
            {
                id: id, text, done: false
            }]
        })
    }
    render() {
        return (
            <section className="todo-app">
                {/* 添加任务 */}
                <TodoAdd onAddTodo={this.addTodo}></TodoAdd>
                <section>
                    <label htmlFor="">Mark all as complete</label>
                    {/* 列表组件 */}
                    <TodoList list={this.state.todos}></TodoList>
                </section>
                {/* footer组件 */}

            </section>
        )
    }
}
export default TodoContainer