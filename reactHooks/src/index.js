import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
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
