import React from 'react'
import Navbar from '../components/Navbar';
import UseContextParentComponent from '../components/UseContextParentComponent';
import CounterWithUseReducer from '../components/CounterWithUseReducer';
import UseMemoComponent from '../components/UseMemoComponent';

const NewHooks = () => {
    return (
        <div>
            <Navbar />
            <h1>Examples of useContext, useReducer, useMemo</h1>

            <h2>useContext</h2>
            <UseContextParentComponent />

            <h2>useReducer</h2>

            <CounterWithUseReducer />

            <h2>useMemo</h2>

            <UseMemoComponent />

            </div>
    )
};

export default NewHooks