import { createContext } from "react"

import { TodoItem } from "../todos"// 引入类型

type TodoContextType = {
    // 列表数据
    todos: TodoItem[],
    // 切换任务状态的回调函数
    onToggleTodo: (id: number) => void,
    // 删除任务的回调函数
    onDeleteTodo: (id: number) => void,
}
// 注意：现在我门要共享的数据是 TodoList 组件需要的所有数据，因此
// 可以直接使用 TodoList 原来的 Props 的类型来作为要共享的数据的类型即阿
const defaultValue: TodoContextType = {} as TodoContextType

const TodoContext = createContext(defaultValue)

export default TodoContext