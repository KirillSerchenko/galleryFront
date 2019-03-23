import React from "react";
import {connect} from 'react-redux'
import * as actions from '../../../../actions/actions'
import {Carousel} from 'react-bootstrap'

class CarouselItems extends React.Component{
    
    async componentDidMount(){
        const res = await fetch('http://localhost:5000/images')
        const data = await res.json()
        this.props.setImages(data)
    }

  render = () => <Carousel style={{width:'100%'}}>
                    {this.props.data.map((img,ind)=><Carousel.Item key={ind}>
                                                        <img className="d-block w-100" src={img.path} alt="First slide" style={{width:"100%",height:"45.8em"}}/>
                                                        <Carousel.Caption>
                                                            <h3>{img.description}</h3>
                                                            <p>{img.date}</p>
                                                        </Carousel.Caption>
                                                    </Carousel.Item>)}
                </Carousel>
                 
 
}

const mapStateToProps = state =>({data:state.images})  

export default connect(mapStateToProps,actions)(CarouselItems);