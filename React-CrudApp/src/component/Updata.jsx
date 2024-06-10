import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import {apiUrl} from '../component/urlcode/Url'
import {Form,Button,Checkbox} from 'semantic-ui-react'
import {useNavigate} from 'react-router-dom'

const Updata = () => {
    const [id,setid]=useState("")
    const [Name,setName]=useState("")
    const [Age,setAge]=useState("")
    const [City,setCity]=useState("")
    const [Check,setCheck]=useState(true)
    const navigate=useNavigate()

    const updata=async()=>{
        await axios.put(apiUrl+id,{
            Name,
            Age,
            City,
            Check
        })
        navigate("/read")
    }

    useEffect(() => {
        setid(localStorage.getItem('id'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setCity(localStorage.getItem('City'))}
    , [])

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
                            <Button onClick={updata} className='formbtn'>Updata</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Updata
