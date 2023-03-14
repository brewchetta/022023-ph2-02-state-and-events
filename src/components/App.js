import React from 'react'
import StateCard from './StateCard'
import { stateNames, stateFlags } from '../data/states'

function App() {

  const stateList = stateNames.map(state => <StateCard key={state} state={state} />)

  console.log('stateList: ', stateList)

  return (
    <div className="App">

      <h1>State and Events</h1>

      { stateList }

    </div>
  );
}

export default App;
