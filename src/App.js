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
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import  ClassCounter from './hooks/ClassCounter'
import HookCounter from './hooks/HookCounter';
import HookCounterTwo from './hooks/HookCounterTwo';
import HookCounterThree from './hooks/HookCounterThree';
import HookCounterFour from './hooks/HookCounterFour';
import HookCounterFive from './hooks/HookCounterFive';
import HookMouse from './hooks/HookMouse';
import HookMouseContainer from './hooks/HookMouseContainer';
import IntervalClassCounter from './hooks/IntervalClassCounter';
import IntervalHookCounter from './hooks/IntervalHookCounter';
import DataFetching from './hooks/DataFetching';

function App() {
  return (
    <div className="App">
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>Success</h1>
      <Counter/>
      <NameList/>
      <StyleSheet primary={true}/>
      <ClickCounter name='Ning'/>
      <HoverCounter name='Ning'/>
      <FRParentInput/>
      <ErrorBoundary>
        <Hero heroname="Batman"/>
        <Hero heroname="Joker"/>
      </ErrorBoundary>
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render= {(isLoggedIn) => isLoggedIn ? "Ning": "User"}/>
      {/* <CounterTwo 
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      /> */}
      <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      </CounterTwo>

      <UserProvider value='Context Value'>
        <ComponentA/>
      </UserProvider>
      
      {/* <UserProvider value='Context Value'>
        <ComponentA/>
      </UserProvider> */}
      {/* <PostList/> */}
      
      {/* <PostForm/> */}
      {/* <HookCounterFive/> */}
      {/* <HookMouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      <DataFetching/>
    </div>
  );
}

export default App;
