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
    constructor(props) {
        super(props);
        this.state = {date: new Date()}

    }

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

// 注释
var i = 1;
var style = {
    fontSize: 100,
    color: '#ff0000'
};
ReactDOM.render(
    <div>
        {/*注释*/}
        <h1 style={style}>
            {i === 1? "true": "false"}
        </h1>
    </div>,
    document.getElementById("example2")
)

var arr = [
    <h1 className="text-success">菜鸟教程</h1>,
    <h2>学的不仅是技术, 更是梦想</h2>
];
// 数据渲染
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById("example3")
);

// 复合组件
class Name extends React.Component {
    render() {
        return (
            <h1>网站名称：{this.props.name}</h1>
        )
    }
}
class Url extends React.Component {
    render() {
        return (
            <h1>网站地址：{this.props.url}</h1>
        )
    }
}
class NickName extends React.Component {
    render() {
        return (
            <h1>网站别称：{this.props.nickName}</h1>
        )
    }
}
function App() {
    return (
        <div>
            <Name name = "菜鸟教程"/>
            <Url url = "https://baidu.com"/>
            <NickName nickName = "bilibili"/>
        </div>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById("example4")
)

// 将生命周期方法添加到类中
class Clock2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }
    // 组件挂载时(第一次加载到dom时)调用

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    // 当该组件从dom中移除时调用
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
        this.success = false;
    }



    tick() {
        this.setState({
            date: new Date()
        });
    }
    // 每次状态改变时, 将会再次调用render方法
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>现在是北京时间：{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <Clock2/>
    </div>,
    document.getElementById("example5")
)

// React Props 不可变
class HelloMessage extends React.Component {

    render() {
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
}
//
function HelloMessage2(props) {
    return (
        <h1>Hello {props.name}</h1>
    )
}
//
HelloMessage.defaultProps = {
    name: "Runoob"
};
ReactDOM.render(
    <HelloMessage2 name = "runoob"/>,
    document.getElementById("example6")
)

// state和props组合使用
// 设置 name 和 site 来获取父组件传递过来的数据。
class WebSite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "菜鸟教程5",
            site: "https://www.runoob.com5"
        }
    }

    render() {
        return (
            <div>
                <Name2 name = {this.state.name}/>
                <Link site = {this.state.site}/>
            </div>
        )
    }
}

class Name2 extends React.Component {
    render() {
        return (
            <h1>{this.props.name}</h1>
        )
    }
}

class Link extends React.Component {
    render() {
        return (
            <h1>{this.props.site}</h1>
        )
    }
}

ReactDOM.render(
    <WebSite/>,
    document.getElementById("example7")
)

// props验证
let title = ["菜鸟教程"];
class Title extends React.Component {

    constructor(props) {
        super(props)
        this.propTypes = {

        }
    }

    render() {
        return (
            <h1>Hello, {this.props.title}</h1>,
                <h1>Hello, {this.props.title}</h1>
        )
    }
}

Title.propTypes = {
    title: function (props, propName, componentName) {
        console.log(props)
        console.log(propName)
        console.log(componentName)
        if (/[a-zA-Z]/.test(props.title))
            return new Error('Validation failed!');
    }
};
ReactDOM.render(
    <Title title= {title}/>,
    document.getElementById("example8")
)

// 事件绑定
function ActionLink() {

    function handleClick(e) {
        e.preventDefault()
        console.log("链接被点击")
    }

    return (
        <a href="javascript:void(0)" onClick={handleClick}>
            点我
        </a>
    )
}

class Toggle extends React.Component {

    /**
     * 属性初始化器语法
     * @type {number}
     */
    i = 5;
    j = 8;

    constructor(props) {
        super(props)

        this.state = {
            toggleOn: true
        };

        // 使得函数保有this对象
        this.handleClick = this.handleClick.bind(this)
    }


    handleClick3 = (self, id) => {
        console.log(id)
    };

    handleClick4 = function(id, self) {
        console.log(self.preventDefault())
    };

    handleClick2 = () => {
        console.log(this + ":" + (this.i + this.j))
    };

    handleClick(e) {
        console.log(e)
        this.handleClick2();
        this.setState(preState => ({
            toggleOn: !preState.toggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.toggleOn? "ON": "OFF"}
            </button>
        )
    }
}



ReactDOM.render(
    <Toggle/>,
    document.getElementById("example9")
)