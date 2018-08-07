// const element = <h1>Hello, world! </h1>
// ReactDOM.render(
//     element,
//     document.getElementsByClassName("container")[0]
// );

// 未组件化
// function tick () {
//     const element =
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>北京时间现在是:{new Date().toLocaleTimeString()}</h2>
//         </div>
//     ;
//
//     ReactDOM.render(
//         element,
//         document.getElementById("example")
//     )
// }
// setInterval(tick, 1000)

// 组件化:函数方式
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>现在是北京时间：{props.date.toLocaleTimeString()}</h2>
//         </div>
//     )
// }
// 组件化：类继承方式
class Clock extends React.Component {
    render() {
        return (
        <div>
        <h1>Hello, world!</h1>
        <h2>北京时间现在是:{this.props.date.toLocaleTimeString()}</h2>
        </div>
    )
    }
}

function tick() {
    ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById("example")
    )
}
setInterval(tick, 1000)