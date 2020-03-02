import React from 'react';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/register">Register</Route>
      <Route path="/login">Login</Route>
      <Route path="/play">Play</Route>
      <Route path="/">Home</Route>
    </Switch>
  );
}

export default App;
