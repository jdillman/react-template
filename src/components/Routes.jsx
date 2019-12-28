import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';

export default function Router() {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route path="/" component={HomeView} />
        </Switch>
      </Route>
    </BrowserRouter>
  );
}
