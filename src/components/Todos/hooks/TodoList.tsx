import { useContext } from "react"
import TodoContext from "../../../containers/hooks/TodoContext"
// 提供 props 类型
const TodoList = () => {
    // 接收共享的数据
    const { todos, onToggleTodo, onDeleteTodo } = useContext(TodoContext)
    return (
        <ul className="todo-list">
            {todos.map(v => <li key={v.id} className={v.done ? 'completed' : ''}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => onToggleTodo(v.id)} />
                    <label>{v.text}</label>
                    <button className="destroy" onClick={() => onDeleteTodo(v.id)}></button>
                </div>
                <input className="edit" defaultValue="TodoMVC template" />
            </li>)}
        </ul>
    )
}
export default TodoList