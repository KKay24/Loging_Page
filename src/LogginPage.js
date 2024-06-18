import React, { useState} from 'react'
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons"


function LogginPage() {

  const [password, setPassword] = useState ("")
  const [vissible, setVissible] = useState (false)
  const [username, setUsername] = useState ("")

  // const history = useHistory();
  // useEffect(()=> {
  //   if (localStorage.getItem('user-info')) {
  //     history.push("/add")
  //   }
  // })

  async function Login()
  {
    console.warn(username,password)
    let item={username, password}
    let result= await fetch("http://localhost:3000/user",{
      method:'POST',
      headers:{
        "content-type":"aplication/json",
      },
      body:JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
  // history.push("/add")
  }

  return (
    <div>
      <div className='loginbox'>
        <h1>Welcome Back!</h1>
        <div className='info'>
            <input 
            type='text'
            value={username}
            placeholder='user_name'
            onChange={(e) => setUsername (e.target.value)}
            />
            <div className='pss2'>
               <input 
               value={password}
               type= {vissible ? "text" : "password"}
               placeholder='password'
               onChange={(e) => setPassword (e.target.value)}
               className='pp5' 
               />
               <div className='eyeicon' onClick={()  => setVissible(!vissible)}>
                { vissible ? <EyeOutlined size="5px"/> : <EyeInvisibleOutlined size="5px"/>  }
               </div>
            </div>
            
            <div className='button'>
            <button onClick={Login}>LogginPage</button>
            <button>Sign_Up</button>
            
            </div>
        </div>
      </div>
    </div>
  )
}

export default LogginPage
