import React, { useState } from 'react'
import axios from 'axios'
import {apiUrl} from '../component/urlcode/Url'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'
import './Create.css'

const Create = () => {
    const [Name,setName]=useState("")
    const [Age,setAge]=useState("")
    const [City,setCity]=useState("")
    const [Check,setCheck]=useState(false)
    const navigate=useNavigate()
    const postcheck=async()=>{
        await axios.post(apiUrl,{
            Name,
            Age,
            City,
            Check
        })
        navigate('/read')
    }
     return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className='card maincrud'>
                        <Form className='form'>
                            <h1>Crud Application</h1>
                            <Form.Field>
                                <label>Name:</label>
                                <input type="text" placeholder='Enter the First name' value={Name} onChange={
                                    (e)=>setName(e.target.value)} />
                            </Form.Field><br/>
                            <Form.Field>
                                <label>Age:</label>
                                <input type='number' placeholder='Enter Your Age' value={Age} onChange={
                                    (e)=>setAge(e.target.value)} />
                            </Form.Field><br/>
                            <Form.Field>
                                <label>City:</label>
                                <input type="text" placeholder='Enter the Last name' value={City} onChange={
                                    (e)=>setCity(e.target.value)} />
                            </Form.Field><br/>
                            <Form.Field>
                                <Checkbox label=" Agree the terms & conditions" value={Check} onChange={
                                    ()=>setCheck(!Check)} className='check'/>
                            </Form.Field><br/>
                            <Button onClick={postcheck} className='formbtn'>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Create
