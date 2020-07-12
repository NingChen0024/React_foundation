import React from 'react'
import './App.css'
import Counter from './components/Counter'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import './appStyle.css'
import styles from './appStyle.module.css'
import FRParentInput from './components/FRParentInput'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'
import ComponentA from './components/ComponentA'
import { UserProvider } from './components/userContext'
import ComponentC from './hooks/ComponentC'
import UserRenderCounter from './hooks/UseRenderCounter'
import UserRenderCounterTwo from './hooks/UseRenderCounterTwo'
import UseRenderCounterThree from './hooks/UseRenderCounterThree'

export const userContext = React.createContext()// define context
export const userContextTwo = React.createContext()

function App () {
  return (
    <div className='App'>
      <h1 className='error'>ERROR</h1>
      <h1 className={styles.success}>Success</h1>
      <Counter />
      <NameList />
      <StyleSheet primary />
      <ClickCounter name='Ning' />
      <HoverCounter name='Ning' />
      <FRParentInput />
      <ErrorBoundary>
        <Hero heroname='Batman' />
        <Hero heroname='Joker' />
      </ErrorBoundary>
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'Ning' : 'User'} />
      {/* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
      /> */}
      <CounterTwo>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>

      <UserProvider value='Context Value'>
        <ComponentA />
      </UserProvider>

      <userContext.Provider value='Context value'>
        {/* pass context value */}
        <userContextTwo.Provider value='Context value two'>
          <ComponentC />
        </userContextTwo.Provider>
      </userContext.Provider>

      
      <UseRenderCounterThree/>

    </div>
  )
}

export default App
