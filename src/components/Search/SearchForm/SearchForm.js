import React from "react";
import {Row,Form,Button,FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as actions from '../../../actions/actions'

const clickHandler = async(searchValue,setImages)=>{
    const res = await fetch(`http://localhost:5000/images/${searchValue}`)
    const data = await res.json()
    setImages(data)
}

const SearchForm = ({setImages,searchValue,setSearchValue}) => <Row>
                                <Form inline style={{textAlign:"center",margin:"auto"}}>
                                <FormControl type="text" placeholder="Search" onChange={(e)=>setSearchValue(e.target.value.toLowerCase())} className="mr-sm-2" />
                                <Button variant="outline-success" onClick={()=>clickHandler(searchValue,setImages)}>Search</Button>
                                </Form>
                            </Row>


const mapStateToProps = state => ({searchValue:state.searchValue})

export default connect(mapStateToProps,actions)(SearchForm)