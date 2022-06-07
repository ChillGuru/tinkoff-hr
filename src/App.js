import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import Navibar from './components/Navibar';
import Sessions from './components/ProductsSessions';
import Products from './components/Products'
import Restaurants from './components/Restaurants'
import Reviews from './components/Reviews'
import UsersList from './components/UsersList'
import RestaurantsList from './components/RestaurantsList';
import RestaurantsToSuggest from './components/RestaurantsToSuggest';
import NewRestaurantsReviews from './components/NewRestaurantsReviews';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">

      <Router>
      <Navibar/>
        <Routes>
          <Route path="/products" element={<Products />}/>
          <Route path="/sessions" element={<Sessions />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/restaurants/*" element={<Restaurants />}>
            <Route index element={<RestaurantsList />}/>
            <Route path="restaurants_to_suggest" element={<RestaurantsToSuggest />}/>
            <Route path="new_reviews" element={<NewRestaurantsReviews />}/>
          </Route>
          <Route path="/active_users_list" element={<UsersList usersStatus={true}/>} />
          <Route path="/inactive_users_list" element={<UsersList usersStatus={false}/>} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
