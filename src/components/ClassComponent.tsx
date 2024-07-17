import React from "react"

type Props = { name: string, age?: number }
type State = { count: number }

// class C1 extends React.Component { }// 无props，无state
// class C2 extends React.Component<Props> { }// 有props，无state
// class C3 extends React.Component<{}, State> { }// 无props，有state
// class C4 extends React.Component<Props, State> { }// 有props，有state

class ClassComponent extends React.Component<Props, State> {// 此处State主要为this.setState提供类型提示
	// 静态属性提供属性默认值
	/* static defaultProps: Partial<Props> = {
		age: 18
	} */
	// 组件状态
	state: State = {// 此处State主要为state提供类型提示
		count: 0
	}
	onIncrement = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		const { name, age = 18/* 默认值简写 */ } = this.props
		return (
			<div>
				<div>你好，我叫：{name},今年{age}</div>
				<button onClick={this.onIncrement}>当前计数器：{this.state.count}</button>
			</div>
		)
	}
}
export default ClassComponent