import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";
//The React.lazy function lets you render a dynamic import as a regular component.
const Homepage = lazy(() => import("./pages/Hero/Hero"));
const Errorpage = lazy(() => import("./pages/Error/Error"));
const Recipelist = lazy(() => import("./pages/Recipe/RecipeList"));
const Recipedetails = lazy(() => import("./pages/SingleRecipe/SingleRecipe"));
//Switch is unique in that it renders a route exclusively. In contrast, every Route that matches the location renders inclusively.
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/recipe" component={Recipelist} />
          <Route exact path="/recipe/:id" component={Recipedetails} />
          <Route exact path="*" component={Errorpage} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
