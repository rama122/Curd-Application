import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { apiUrl } from './urlcode/Url'
import {Table,Button,TableCell} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import './Read.css'

const backbtn="<- Back"
const Read = () => {
    const [apidata,setapidata]=useState([])
    const navigate=useNavigate()

    const updatabtn=({id,Name,Age,City,Check})=>{
        localStorage.setItem('id',id)
        localStorage.setItem('Name',Name)
        localStorage.setItem('Age',Age)
        localStorage.setItem('City',City)
        localStorage.setItem('Check',Check)
        navigate('/updata')
    }
    const backfn=()=>{
        navigate('/create')
    }
    const callgetapi=async()=>{
        const resp= await axios.get(apiUrl)
        setapidata(resp.data)
    }
    const delebtn=async(id)=>{
        await axios.delete(apiUrl+id)
        callgetapi()
     }
  
    useEffect(() => {
        callgetapi()
    },[])

    return (
        <div >
            <Table singleLine>
                <Table.Header>
                    <Table.Row className='tablehead'>
                        <Table.HeaderCell className='tableheads'>Name</Table.HeaderCell>
                        <Table.HeaderCell className='tableheads'>Age</Table.HeaderCell>
                        <Table.HeaderCell className='tableheads'>City</Table.HeaderCell>
                        <Table.HeaderCell className='tableheads'>Checked</Table.HeaderCell>
                        <Table.HeaderCell className='tableheads'>Updata</Table.HeaderCell>
                        <Table.HeaderCell className='tableheads'>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        apidata.map(data => (
                            <Table.Row key={data.id} className='tablebody'> 
                                <TableCell className='tablebody1'>{data.Name}</TableCell>
                                <TableCell className='tablebody1'>{data.Age}</TableCell>
                                <TableCell className='tablebody1'>{data.City}</TableCell>
                                <TableCell className='tablebody1'>{data.Check ? "Checked" : "Not Checked"}</TableCell>
                                <TableCell><Button onClick={ () => updatabtn(data) } className='tbtn1'> Updata</Button></TableCell>
                                <TableCell><Button onClick={ () => delebtn(data.id) } className='tbtn2'> Delete</Button></TableCell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <div><button type="button" onClick={backfn} className='backbtn'>{backbtn}</button></div>
        </div>
    )
}

export default Read
