import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AdminHome from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateModule from './pages/Admin/CreateModule';
import UpdateModule from './pages/Admin/UpdateModule';
import CreateClass from './pages/Admin/CreateClass';
import UpdateClass from './pages/Admin/UpdateClass';
import { Container } from "semantic-ui-react";

function Routes()
{
  return (
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/admin" component={AdminHome} />
        <Route exact path="/createModule" component={CreateModule} />
        <Route exact path="/createClass" component={CreateClass} />
        <Route exact path="/updateModule" component={UpdateModule} />
        <Route exact path="/updateClass" component={UpdateClass} />
      </Container>
    </BrowserRouter>
  );
}
export default Routes;
