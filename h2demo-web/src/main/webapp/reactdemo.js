

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

    // 属性初始化器语法
    handleClick2 = () => {
        console.log(this + ":" + (this.i + this.j))
    };

    handleClick(e) {
        console.log(e)
        this.handleClick2();
        this.setState(preState => {

            return {toggleOn: !preState.toggleOn}
        })
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

// 事件绑定
function ActionLink() {
    function handleClick(params, e) {
        console.log(params);
    }

    return (
        <a href="#" onClick={handleClick.bind(this, 'fdfd')}>
            点我
        </a>
    );
}

$(function () {
    ReactDOM.render(
        <ActionLink/>,
        document.getElementById("example10")
    )
})

// 条件渲染
class UserGreeting extends React.Component {

    render() {
        return (
            <h3>
                欢迎回来
            </h3>
        )
    }
}

class GuestGreeting extends React.Component {

    render() {
        return (
            <h3>
                请先注册
            </h3>
        )
    }
}

function Greeting(props) {

    if (props.login){
        return <UserGreeting/>
    }
    else
        return (
            <GuestGreeting/>
        )
}

function LoginButton(props) {

    return (
        <button onClick= {props.onClick}>
            登录
        </button>
    )
}
function LogoutButton(props) {

    return (
        <button onClick = {props.onClick}>
            退出
        </button>
    )
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }
    // 相应按钮点击事件
    handleClick = () => {
        this.setState( preState => ({
            login: !preState.login
        }))
    }

    render() {

        const login = this.state.login;
        let button;
        if (login) {
            button = <LoginButton onClick = {this.handleClick}/>
        }
        else {
            button = <LogoutButton onClick = {this.handleClick}/>
        }


        return (
            <div>
                <Greeting login = {login}/>
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl/>,
    document.getElementById("example11")
)


function Mailbox(props) {

    const unReadMessage = props.unReadMessages;
    console.log(unReadMessage.length > 0)
    return (
        <div>
            <h1>Hello</h1>
            {
                unReadMessage.length > 0? (
                    <h2>
                        你有 {unReadMessage.length }条消息信息
                    </h2>
                ): (
                    <h2>尚没有信息需要查看</h2>
                )
            }
        </div>
    )


}

const messages = []
ReactDOM.render(
    <Mailbox unReadMessages = {messages}/>,
    document.getElementById("example12")
)

// React列表&Keys
function ListItem(props) {
    return (
        <li>
            {props.value}
        </li>
    )
}

function NumberList(props) {
    const listItems = props.numbers.map(number => {

        return <ListItem
            key={number.toString()}
            value={number}/>
        }

    );
    return (
        <ul>
            {listItems}
        </ul>
    )
}
const numbers = [1,2,3,4,5,6,7,8,9]
ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById("example13")
)

// React组件API
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}/>
            </div>
        );
    }
}

/**
 * 生命周期函数运行顺序：
 * 如下方法的书写顺序
 */
class Content extends React.Component {

    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('example14')
);

// React AJAX
class Component extends React.Component{}

class UserGist extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {username: '', lastGistUrl: ''};
    // }

    componentWillMount() {
        this.state = {username: '', lastGistUrl: ''};
    }

    // 组件挂载完成后进行调用
    componentDidMount() {
        this.serverRequest = $.get(this.props.source, function (result) {
            var lastGist = result[0];
            this.setState({
                username: lastGist.owner.login,
                lastGistUrl: lastGist.html_url
            })

        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                {this.state.username} 用户最新的Gist共享地址为：
                <a href = {this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
            </div>
        )
    }

}

ReactDOM.render(
    <UserGist source = "https://api.github.com/users/octocat/gists"/>,
    document.getElementById("example14")
)

// input输入框
class HelloMessage1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "Hello Runoob!"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        let value = this.state.value;

        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <h4>{value}</h4>
            </div>
        )
    }
}
ReactDOM.render(
    <HelloMessage1 />,
    document.getElementById("example15")
)

// select下拉菜单
class FalvorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "请选择你最喜欢的网站",
            sites:[]
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleSubmit = (event) => {
        alert("Your favorite flavor is " + this.state.value)
    };


    componentDidMount() {
        this.setState({
            sites: [
                {
                    id: 'gg',
                    name: 'Google'
                },
                {
                    id: 'rn',
                    name: "Runoob"
                },
                {
                    id: "tb",
                    name: "Taobao"
                },
                {
                    id: "fb",
                    name: "Facebood"
                }
            ]
        })
    }

    render() {

        return (
            <form>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {
                            this.state.sites.map(site =>
                                <option key={site.id} value={site.id}>{site.name}</option>
                            )
                        }
                    </select>
                </label>
            </form>
        )
    }
}
ReactDOM.render(
    <FalvorForm/>,
    document.getElementById("example16")
)

// 多个表单
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // 让函数根据event.target.name的值来选择做什么
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <label>
                    是否离开:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    访客数:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation/>,
    document.getElementById("example17")
)

// refs: 获取某组件的引用
class MyComponent extends React.Component {

    handleClick() {
        // 使用原生的DOM的API获取焦点
        var myInput = this.refs.myInput
        console.log($(myInput))
    }

    render() {
        return (
            <div>
                <input type="text" ref="myInput"/>
                <input type="button" value="点我输入框获取焦点" onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById("example18")
)

