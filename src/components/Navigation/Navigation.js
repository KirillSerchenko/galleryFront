import React from "react";
import {Link} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'
import './Navigation.css'



//Navigation bar component
const Navigation =({arr,setNav})=><Navbar collapseOnSelect bg="dark" variant='dark'>
                            <Link className={arr[0]?'styledLinkActive':'styledLink'} to="/" onClick={()=>setNav([true,false,false])}><i className="fas fa-images fa-spin"></i> Gallery</Link> 
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Link className={arr[1]?'styledLinkActive':'styledLink'} onClick={()=>setNav([false,true,false])} to="/upload"><i className="fas fa-upload"> Upload Image</i></Link>
                                    <Link className={arr[2]?'styledLinkActive':'styledLink'} onClick={()=>setNav([false,false,true])} to="/search"><i className="fas fa-search"> Search Image</i></Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>

const mapStateToProps= state => ({arr:state.arr})
export default connect(mapStateToProps,actions)(Navigation);