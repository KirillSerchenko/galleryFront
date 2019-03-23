import React from "react";
import {Form,InputGroup,Button,Image} from 'react-bootstrap'
import FormData from 'form-data'
import './Uploader.css'
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'
import src from '../../resource/Form-Icon.png'
import {Row} from 'react-bootstrap'

const submitData = async(e,text,history,clearForm,val,setNav) => {
    const formData = new FormData()
    formData.append('myFile',val,val.name)
    formData.append('text', text)
    await fetch("http://localhost:5000/images", {
        method: "POST",
        body: formData
    })
    
    clearForm()
    setNav([true,false,false])
    history.push('/')
}


const Uploader = ({text, changed, setValue, changedHandler,history,clearForm,val,setNav}) =>
    <Row>
    <Form className="kenburns-top" style={{margin:"10% auto",border:"2px white inset",textAlign:"center",padding:"15px",backgroundColor:"white"}} >
        <Form.Row >
            <Form.Control style={{color:"green"}} type="file" onChange={(e)=>changedHandler(e.target.files[0])}/>
                <InputGroup
                    className={changed?'swing-in-top-fwd':null}
                    style={{visibility:changed? 'visible':'hidden'}}>
                    <InputGroup.Prepend>
                        <Button variant="outline-success" onClick={(e) => submitData(e,text,history,clearForm,val,setNav)}>UPLOAD</Button>
                    </InputGroup.Prepend>
                    <Form.Control
                        as='textarea'
                        placeholder="Description ..."
                        name='myText'
                        onChange={(e) => setValue(e.target.value)}/>
                </InputGroup>
        </Form.Row>
        <Image src={src} />
        </Form>
    </Row>


const mapStateToProps = state => ({text: state.text, changed:state.changed,val:state.val})

export default connect(mapStateToProps,actions)(Uploader)


