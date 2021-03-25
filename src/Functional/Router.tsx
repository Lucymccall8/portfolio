import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HomeView = React.lazy(() => import("../Presentation/Views/HomeView"));
const ProjectView = React.lazy(() => import("../Presentation/Views/ProjectView"));
const AboutView = React.lazy(() => import("../Presentation/Views/AboutView"));
const PageNotFoundView = () => <>Page Not Found</>;

const Router: React.FC = () => (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/ProjectView" component={ProjectView} exact />
          <Route path="/AboutView" component={AboutView} exact />
          <Route component={PageNotFoundView} exact />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
  export default Router;