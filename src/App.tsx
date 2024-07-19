// import React from 'react';
// import logo from './logo.svg';
import './App.css'

import './assets/todos-index.css'
import './assets/todos-base.css'

import FunctionComponent from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent'
import TodoContainer from './containers/hooks/TodoContainer'
import HooksComponent from './components/HooksComponent'
import ReducerComponent from './components/ReducerComponent'
import ReducerTodoContainer from './containers/reducer/TodoContainer'
import UseMemoContainer from './containers/useMemo/UseMemoContainer'
import UseRefContainer from './containers/useRef/UseRefContainer'
import CustomUseStateContainer from './containers/customUseState/CustomUseStateContainer'

function App() {
    return (
        <div id="App" className="App">
            {/* <FunctionComponent name="FunctionComponent"></FunctionComponent> */}
            <hr />
            {/* <ClassComponent name="ClassComponent"></ClassComponent> */}
            <hr />
            {/* <TodoContainer></TodoContainer> */}
            {/* <HooksComponent></HooksComponent> */}
            {/* <ReducerComponent></ReducerComponent> */}
            <ReducerTodoContainer></ReducerTodoContainer>
            {/* <UseMemoContainer></UseMemoContainer> */}
            {/* <UseRefContainer></UseRefContainer> */}
            <CustomUseStateContainer></CustomUseStateContainer>
        </div>
    )
}

export default App
