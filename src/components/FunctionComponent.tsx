import React from "react"

type Props = {
    name: string,
    age?: number
}
// 一般函数组件
/* const FunctionComponent: React.FC<Props> = ({ name, age }) => (
    <div>{name}-{age}</div>
) */
// 函数简写
/* const FunctionComponent = ({ name, age }: Props) => (
    <div>{name}-{age}</div>
)
// 设置默认属性
FunctionComponent.defaultProps = {
    age: 18
} */
// 函数简写+默认属性简写

const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('>>>>>onClick', e.currentTarget)
}
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('>>>>>onChange', e.target.value)
}
const FunctionComponent = ({ name, age = 18 }: Props) => (
    <div>
        <div>你好，{name}，今年{age}</div>
        <button onClick={onClick}>点击</button>
        <input type="text" onChange={onChange} />
        {/* 鼠标放到参数e上有类型推断 */}
        <input type="text" onChange={e => { }} />
    </div>
)
export default FunctionComponent
