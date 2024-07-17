import React from "react"


// 导入 TodoItem 类型
import { TodoItem } from "../../../containers/todos"
// 提供 props 类型
interface Props {
    list: TodoItem[]
}

class TodoList extends React.Component<Props> {
    handleChange = () => {

    }
    render() {
        return (
            <ul>
                {this.props.list.map(v => <li key={v.id} className={v.done ? 'completed' : ''}>
                    <div>
                        <input type="checkbox" onChange={this.handleChange} checked={v.done} />
                        <label htmlFor="">{v.text}</label>
                        <button></button>
                    </div>
                </li>)}
            </ul>
        )
    }
}
export default TodoList