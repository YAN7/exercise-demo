import React, { useReducer } from 'react'

const initStore = { count: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase': return { count: state.count + 1 };
        case 'reduce': return { count: state.count - 1 };
        default: return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initStore);
    return (
        <div>
            <h3>useReducer 版counter</h3>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increase'})}>
                +1
            </button>
            <button onClick={() => dispatch({type: 'reduce'})}>
                -1
            </button>
        </div>
    )
}

export default Counter
