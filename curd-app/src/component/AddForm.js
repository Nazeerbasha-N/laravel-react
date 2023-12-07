import React from 'react'
import { Button, Modal, ModalBody} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
// import { useState } from 'react';

export const AddForm = (props) => {

  let formData =["id","product_name" ,"Product_cost"]
  let propdata = props.data
  console.log("propdata",propdata)
  let formvalue = [propdata.id,propdata.product_name,propdata.product_cost]

  return (
    <Modal show={props.open}>
        <ModalBody>
        <Form>
          {
           formData.map((itm)=>(
            <>
            <Form.Label>{itm}</Form.Label>
            <Form.Control
                  type="text"
                  placeholder={itm==="id"?propdata.id:itm==="product_name"?propdata.product_name:propdata.product_cost}
                  autoFocus
                />
            </>
           ) 
        )
        }
            <Button onClick={()=>props.addFormSubmit(formvalue)}>Update</Button>
            </Form>
        </ModalBody>
    </Modal>
  )
}
