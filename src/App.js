import { React, Component } from 'react';
import Header from "./components/Header";
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';


export default class App extends Component {
  render(){
    return (
      <div>
      <Header/>
       <Component1/>
       <Component2/>
       </div>
     );
  }
}