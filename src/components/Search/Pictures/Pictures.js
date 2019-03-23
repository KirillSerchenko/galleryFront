import React from "react";
import { connect } from "react-redux";
import {Row,Col,Card} from 'react-bootstrap'

const Pictures = ({data})=> <Row style={{width:"80%",margin:"4% auto",height:"500px",overflowY:"scroll",overflowX:"hidden"}}> 
                                {data?data.map((image,ind)=><Col className='styledCol' key={ind} xs={12} md={4}>
                                                                <Card className='styledCard'>
                                                                    <Card.Img variant="bottom" src={image.path} />
                                                                    <Card.Body>
                                                                        <Card.Text>
                                                                            {image.tags}
                                                                        </Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            </Col>):<div>Loading...</div>}
                            </Row>

const mapStateToProps = state => ({data:state.images})
export default connect(mapStateToProps,null)(Pictures)
