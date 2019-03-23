import React from 'react';
import Navigation from '../Navigation/Navigation'
import AppRoutes from '../AppRoutes/AppRoutes'
import  './App.css'

//Main of application contain navigation bar and routes of app.
export const App = _ => <>
                          <Navigation />
                          <AppRoutes />
                        </>

export default App;
