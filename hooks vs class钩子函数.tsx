import { useEffect, Component } from 'react'
const Counter_1 = () => {
    useEffect(() => {
        const handleResize = () => { console.log('resize') }
        window.addEventListener('resize', handleResize)
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])
}
// 对应 class 实现
class Counter_2 extends Component {
    handleResize = () => { console.log('resize') }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }
}
export {
    Counter_1,
    Counter_2,
}