import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap'

export const Body=(props)=>{
    console.log('body props',props);
    const {data} = props
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Product Cost</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               { data.map((item) =>(
                    
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.product_name}</td>
                        <td>{item.product_cost}</td>
                        <td><Button variant="success" onClick={()=>props.handleEdit(item)}>Edit</Button></td>
                        <td><Button variant="danger">Delete</Button></td>
                    </tr>
                ))}
                
            </tbody>
        </Table>    
    );
}