// import React from 'react';
// import logo from './logo.svg';
import "./App.css"

import "./assets/todos-index.css"
import "./assets/todos-base.css"

import FunctionComponent from "./components/FunctionComponent"
import ClassComponent from "./components/ClassComponent"
import TodoContainer from "./containers/hooks/TodoContainer"
import HooksComponent from "./components/HooksComponent"
import ReducerComponent from "./components/ReducerComponent"
import ReducerTodoContainer from "./containers/reducer/TodoContainer"

function App() {
    console.log(9)
    return (
        <div className="App">
            <FunctionComponent name="FunctionComponent"></FunctionComponent>
            <hr />
            <ClassComponent name="ClassComponent"></ClassComponent>
            <hr />
            <TodoContainer></TodoContainer>
            <HooksComponent></HooksComponent>
            <ReducerComponent></ReducerComponent>
            <ReducerTodoContainer></ReducerTodoContainer>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    )
}

export default App
