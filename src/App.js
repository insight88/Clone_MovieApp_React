import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
    // ! Route path가 포함된 주소는 모두 한꺼번에 render
    // ! 중복 render를 방지하기 위해 정확히 일치하는 문자열 주소만 찾는 exact가 쓰임
  );
}

export default App;
