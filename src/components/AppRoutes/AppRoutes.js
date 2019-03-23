import React from "react";
import {Route} from 'react-router-dom'
import Search from '../Search/Search'
import Uploader from '../Uploader/Uploader'
import Home from '../Home/Home'
import Switch from 'react-router-transition-switch'
import Fader from 'react-fader'

//Animated switch between components with transition.(by default shows Home component)
const AppRoutes = _ =><Switch component={Fader}>
                        <Route  path="/upload" component={Uploader}  />
                        <Route  path="/search" component={Search}  />  
                        <Route exact path='/' component={Home} />                      
                      </Switch> 

export default AppRoutes;