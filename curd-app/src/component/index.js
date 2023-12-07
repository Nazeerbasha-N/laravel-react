import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useState,useEffect } from "react";
import { AddForm } from "./AddForm";

export const IndexPage=()=>{
const [data, setData] = useState([]);
const [modalIsOpen, setModalIsOpen] = useState(false)
const [addFormvalue,setAddFormValue]=useState([]);
let dummyData=[
    {
        id:"1",
        product_name:"laptop",
        product_cost:"100"
    }
    ,
    {
        id:"2",
        product_name:"phone",
        product_cost:"10012"
    }
]

useEffect(() => { 
    setData(dummyData)
}, []);
const handleEdit=(value)=>{
    setModalIsOpen(true);
    setAddFormValue(value);
console.log('handle Edit',value);
}
const addFormSubmit=(value)=>{
//update dummy data;

console.log("dsds"+value);

setModalIsOpen(false);
}
 
console.log('data',data);
return(
    <>
    <Header/>
    <Body data= {data} handleEdit={handleEdit} />
    <Footer/>
    {modalIsOpen===true?
    <AddForm open={true} data={addFormvalue} addFormSubmit={addFormSubmit}/>
    :
    ''
    }
    </>
);
}