import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import(/* webpackChunkName: "login" */ '@con/Login'));
const Frame = lazy(() => import(/* webpackChunkName: "Frame" */ '@con/Frame'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ '@con/home'));
let a: string = '2';
// a = 1;

console.log(a);
function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Frame} />
      </Switch>
    </Suspense>
  );
}

export default App;
