
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News  from './Components/News';
import Home from './Components/Home';
import {Route,Routes,HashRouter} from "react-router";
import LoadingBar from "react-top-loading-bar";
 class App extends Component {
   
   constructor(){
    super();
    this.togglemode=this.togglemode.bind(this)
    this.state={
    text:"Dark",
    back:"dark"
    }
  }
   
  togglemode() {
  if (this.state.text === "Dark") {
    document.body.style.backgroundColor = "#0e3158";
    this.setState({ text: "Light",back:"light" });
  } 
  else {
    document.body.style.backgroundColor = "white";
    this.setState({ text: "Dark",back:"dark" });
  }
}
state={
  progress:0
}
setProgress=(progress)=>{
  this.setState({progress:progress})
}
apiKey=process.env.REACT_APP_NEWS_API;
  render(){
    return (
      <HashRouter>
        <div>
          <Navbar
            togglemode1={this.togglemode}
            text1={this.state.text}
            back1={this.state.back}
          />
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
        height={3}
      />
          <Routes>
             <Route exact
              path="/"
              element={<Home setProgress={this.setProgress} apiKey={this.apiKey} />}
            />
            <Route exact
              path="/general"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={4} country="us" category="general" />}
            />
            <Route exact
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={4} country="us" category="sports" />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={4} country="us" category="entertainment" />
              }
            />
             <Route exact
              path="/health"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={4} country="us" category="health" />
              }
            />
             <Route exact
              path="/science"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={4} country="us" category="science" />
              }
            />
             <Route exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={4} country="us" category="technology" />
              }
            />
             <Route exact
              path="/business"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={4} country="us" category="business" />
              }
            />
          </Routes>
        </div>
      </HashRouter>
    );
  }
}

export default App;
