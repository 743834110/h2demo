

// createStore的简单实现
const createStoreFunction = (reducer) => {
    let state;
    let listeners = [];

    // 获取状态
    const getState = () => state;

    // 调度
    const dispatch = (action) => {

        // reducer产生一个新的state
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    };

    // 订阅
    const subscribe = listener => {
        listeners.push(listener)
    }

    // 初始化状态
    dispatch({});

    return {
      getState, dispatch, subscribe
    };


};

// 默认参数的chatReducer函数
const combineReducers = reducers => {
    return (state = {}, action) => {
        // 反射？？？
        return Object.keys(reducers).reduce(
            (nextState, key) => {

                nextState[key] = reducers[key](state[key], action)
                return nextState;
            }
        )
    }
}

// 实例：计数器
function Test(props) {
    return (
        <h1>
            {props}
        </h1>
    )
}
const Counter = ({props}) = (
    <h1>
        {props}
    </h1>
)



