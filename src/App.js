import React from 'react';
import './App.css';
import TodoList from './todos/TodoList'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet'
import InlineStyle from './components/InlineStyle';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


function App() {
  return (
    <div className="App">
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>Success</h1>
      <Counter/>
      <NameList/>
      <StyleSheet primary={true}/>
      <ClickCounter name='Ning'/>
      <HoverCounter/>
   
    </div>
  );
}

export default App;
