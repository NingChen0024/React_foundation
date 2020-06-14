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

function App() {
  return (
    <div className="App">
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>Success</h1>
      <Counter/>
      <NameList/>
      <StyleSheet primary={true}/>
      <InlineStyle/>
      <Form/>
    </div>
  );
}

export default App;
