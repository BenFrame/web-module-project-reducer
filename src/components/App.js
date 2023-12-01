import React, {useState, useReducer} from 'react';
import reducer, {initialState} from '../reducers';
import {addOne, applyNumber, changeOperation, clearCalc, memoryAdd, memoryClear, memoryApply} from '../actions'

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setOperation = (ev) => dispatch(changeOperation(ev.target.value));
  const setNumberClick = (ev) => dispatch(applyNumber(Number(ev.target.value)));

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={ () => dispatch(memoryAdd())}/>
              <CalcButton value={"MR"} onClick={ () => dispatch(memoryApply())}/>
              <CalcButton value={"MC"} onClick={ () => dispatch(memoryClear())}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick= { setNumberClick }/>
              <CalcButton value={2} onClick= { setNumberClick }/>
              <CalcButton value={3} onClick= { setNumberClick }/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick= { setNumberClick }/>
              <CalcButton value={5} onClick= { setNumberClick }/>
              <CalcButton value={6} onClick= { setNumberClick }/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick= { setNumberClick }/>
              <CalcButton value={8} onClick= { setNumberClick }/>
              <CalcButton value={9} onClick= { setNumberClick }/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={setOperation}/>
              <CalcButton value={"*"} onClick={setOperation}/>
              <CalcButton value={"-"} onClick={setOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={ () => dispatch(clearCalc()) }/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
