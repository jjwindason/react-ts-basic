import { useEffect, useReducer } from "react"
import TodoAdd from "../../components/Todos/reducer/TodoAdd"
// import TodoList from "../../components/Todos/hooks/TodoList"
// import TodoFooter from "../components/Todos/TodoFooter"
import MainSection from "../../components/Todos/reducer/MainSection"
import TodoContext from "../hooks/TodoContext"

// 引入类型
import { TodoItem } from "../todos"
const initalState = [
	{ id: 1, text: "吃饭", done: false },
	{ id: 2, text: "休息", done: false },
]
// action 的类型
type ActionType = { type: "add"; payload: string } | { type: "toggle"; payload: TodoItem["id"] } | { type: "delete"; payload: TodoItem["id"] } | { type: "loadData" }
// 创建 reducer 函数
const reducer = (state: TodoItem[], action: ActionType) => {
	switch (action.type) {
		case "add":
			return [
				...state,
				{
					id: state.length ? state[state.length - 1].id + 1 : 1,
					text: action.payload,
					done: false,
				},
			]
		case "toggle":
			return state.map((v) => {
				if (v.id === action.payload) {
					return {
						...v,
						done: !v.done,
					}
				}
				return v
			})
		case "delete":
			return state.filter((v) => v.id !== action.payload)
		case "loadData":
			const res = localStorage.getItem("todos")
			if (res) {
				const newTodos = JSON.parse(res)
				return newTodos
			}
			return state
		default:
			return state
	}
}
const TodoContainer = () => {
	const [state, dispatch] = useReducer(reducer, initalState)
	// 读取localStorage
	useEffect(() => {
		dispatch({ type: "loadData" })
	}, [])
	// 存储localStorage
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(state))
	}, [state])
	// 添加任务
	const onAddTodo = (text: string) => {
		dispatch({ type: "add", payload: text })
	}
	// 改变状态
	const onToggleTodo = (id: number) => {
		dispatch({ type: "toggle", payload: id })
	}
	// 删除
	const onDeleteTodo = (id: number) => {
		dispatch({ type: "delete", payload: id })
	}
	return (
		<section className="todoapp">
			{/* 添加任务 */}
			<TodoAdd onAddTodo={onAddTodo}></TodoAdd>
			{/* 提供共享数据 */}
			<TodoContext.Provider value={{ state, onToggleTodo, onDeleteTodo }}>
				{/* 中间件，测试Context所用 */}
				<MainSection></MainSection>
			</TodoContext.Provider>
			{/* footer组件 */}
		</section>
	)
}
export default TodoContainer
