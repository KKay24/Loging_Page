import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() {

 

  const [firstname, setFirstName] = useState ("")
  const [lastname, setLastName] = useState ("")
  const [password, setPassword] = useState ("")
  const [email, setEmail] = useState ("")
  const [vissible, setVissible] =useState (true)


  useEffect(()=> {
    if (localStorage.getItem('user-info')) {
  
    }
  })

  const navigate = useNavigate();

  async function signUp()
  {
    console.log(firstname, lastname,password, email)
    let item={firstname, lastname, password, email}
    let result= await fetch("http://localhost:3000/user",{
      method:'POST',
      headers:{
        "content-type":"aplication/json",
      },
      body:JSON.stringify(item)
    }).then((res)=>{
        toast.success('Signed up.')
        navigate('/Home')
    }).catch((err)=>{
        toast.error('Failed:'+err.message);
      });
    
    localStorage.setItem("user-info",JSON.stringify(result))
  
  }

 
  {
    const data={firstname, lastname,password,email}
    console.log(data)
  
    
  }

  return (
    <div className='details'>
      <input 
      type='text'
      placeholder='first name'
      value={firstname}
      onChange={(e)=>setFirstName (e.target.value)}
      />
      <input 
      type='text'
      placeholder='last name'
      value={lastname}
      onChange={(e)=>setLastName (e.target.value)}
      />
      <input 
      type='text'
      placeholder='email'
      value={email}
      onChange={(e)=>setEmail (e.target.value)}
      />
     <div className='pss2' >
      <input 
      type='password'
      placeholder='password'
      value={password}
      onChange={(e)=>setPassword (e.target.value)}
      />
       <div className='eyeicon' onClick={()  => setVissible(!vissible)}>
                { vissible ? <EyeOutlined size="5px"/> : <EyeInvisibleOutlined size="5px"/>  }
               </div>
      </div>
      <button onClick={signUp} >Sign Up</button>
    </div>
  )
}

export default SignUp;
