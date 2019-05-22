import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router-dom'

import Counter from './useReducer'


function App() {
    // 1. Use the name state variable
    const [name, setName] = useState('Mary');

    // 2. Use an effect for persisting the form
    useEffect(function persistForm() {
        localStorage.setItem('formData', name);
    });

    // 3. Use the surname state variable
    const [surname, setSurname] = useState('Poppins');

    const [count, setCount] = useState(0);

    // 4. Use an effect for updating the title
    useEffect(function updateTitle() {
        document.title = name + ' ' + surname;
    });
    return (
        <div>
            hello world
            <div>
                <button onClick={() => setCount(count+1)}>
                    +1
                </button>
                <button onClick={() => setCount(count - 1)}>
                    -1
                </button>
                {count}
            </div>
            <Counter />
        </div>
    )

    // ...
}

const App1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `你${count}好`
    })

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
