import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About'
import Tech from './components/Technologies'
import Nav from './components/Nav'
import Projects from './components/Projects'
import './App.css'


class App extends Component {

  constructor(){
    super();
    this.state ={
      className: 'hidden',
      secondName: 'hidden',
      thirdName: 'hidden'
    }
  }

handleScroll() {
  if(document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 500 ){
    this.setState({className: 'show'})
  } else if(document.documentElement.scrollTop > 550 && document.documentElement.scrollTop < 700){
    this.setState({secondName: 'showagain'})
  } else if(document.documentElement.scrollTop > 720){
    this.setState({thirdName: 'thirdagain'})
  }
}
componentDidMount(){
  window.onscroll = () => this.handleScroll()
}

  render() {
    return (
      <div>
      <Nav />
      <Header />
      <About />
      <Tech className = {this.state.className} secondName = {this.state.secondName} thirdName = {this.state.thirdName}/>
      <Projects />
      </div>     
     
    );
  }
}

export default App;
