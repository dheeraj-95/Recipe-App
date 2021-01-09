import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { RecipeState } from './contexts/recipe/RecipeState'
import { AlertState } from './contexts/alert/AlertState'
import { Navbar } from './Components'
import { 
//   Home, 
  Recipes, 
  Recipe, 
//   RecipeEdit,
//   Create,
//   NotFound
} from './views'


import './App.css'



function App() {
  return (
    
    <RecipeState>
      {/* <ThemeState> */}
        <AlertState>
          <Router>
            {/* <Alert /> */}
            <Navbar />
            <div className="bd-grid">
              <Switch>
                {/* <Route path="/" component={Home} exact /> */}
                <Route path="/recipes" component={Recipes} exact />
                <Route path="/recipes/:id/" component={Recipe} exact />
                {/*<Route path="/recipes/:id/edit" component={RecipeEdit} />
                <Route path="/create" component={Create} exact />
                <Route path="*" component={NotFound} /> */}
              </Switch>
            </div>
            {/* <Footer /> */}
          </Router>
        </AlertState>
      {/* </ThemeState> */}
    </RecipeState>
    
  )
}

export default App
