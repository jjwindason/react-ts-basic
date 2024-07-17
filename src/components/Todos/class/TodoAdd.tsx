import React from "react"

// 属性类型
type Props = {
    onAddTodo(text: string): void
}
// 状态类型
type State = {
    text: string
}

class TodoAdd extends React.Component<Props, State> {
    state: State = {
        text: ''
    }
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            text: e.target.value
        })
    }
    onAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        /* 
            注意： keyCode 属性将来会被废弃凋用，因此，在 TS 中使用的时候，会有一个中横线，可以使用下面code属性来代替
        */
        const { text } = this.state
        if (e.keyCode === 13 || e.code === 'Enter') {// 回车；keyCode横线表示已弃用
            if (!text.trim()) return
            this.props.onAddTodo(this.state.text)
            // 清空文本框
            this.setState({
                text: ''
            })
        }
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} value={this.state.text} onKeyDown={this.onAdd} />
            </div>
        )
    }
}
export default TodoAdd