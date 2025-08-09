import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Signup = () => {
  const [userd, setUserd]=useState({name: '',regno: '',gender: '',grade: '' });
 const [findname,setFindname]= useState('');
  useEffect(() => {
    const fetchData=async ()=>{
      try {
        const response=await fetch('http://localhost:3000/students');
        const data=await response.json();
        localStorage.setItem('userData',JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching data:',error);
      }
    };
    fetchData();
  }, []);

  const handle=()=>{
    const existingData = JSON.parse(localStorage.getItem('userData')) || [];
    const newData = [...existingData, userd];
    localStorage.setItem('userData', JSON.stringify(newData));
    alert("Data saved successfully");
    setUserd({name: '',regno: '',gender: '',grade: ''});
  };
  const handelCheck=()=>{
    const newData=userd.match((uname)=>uname===findname);
    if(!newData){
      alert("Data saved successfully");
    }
    else alert("Data not ");
    
  }
  const handeldele=()=>{
     const newData=userd.match((uname)=>uname===findname);
      if(newData){
      localStorage.removeItem('userData',JSON.stringify(newData))
    }
  }
// const listdata=userd;
// console.log("created");

// console.log(listdata);

  return (
    <Box sx={{ ml:60}}>
      <Typography sx={{ fontSize: 30 }}>Signup page</Typography>

      <Box>
        <TextField type='text' placeholder='Enter your name' variant='standard' label="Username" value={userd.name} onChange={(e) => setUserd({ ...userd, name: e.target.value })} />
      </Box>

      <Box>
        <TextField type='text' placeholder='Enter your gender' variant='filled' label="Gender" value={userd.gender} onChange={(e) => setUserd({ ...userd, gender: e.target.value }) }/>
      </Box>

      <Box>
        <TextField type='text' placeholder='Enter your register no' variant='filled' label="Register" value={userd.regno} onChange={(e) => setUserd({ regno: e.target.value })} />
      </Box>

      <Box>
        <TextField type='text' placeholder='Enter your grade' variant='filled' label="Grade"value={userd.grade} onChange={(e) => setUserd({ ...userd, grade: e.target.value })} />
     </Box>

      <Button variant='contained' onClick={handle}>Submit</Button>
      <Box>
        <h1>Login</h1>
        <Box>
        <TextField type='text' placeholder='Enter your name' variant='standard' label="Username" value={findname} onChange={(e) => setFindname(e.target.value )} />
           <Button variant='contained' onClick={handelCheck}>Submit</Button>
            <Button variant='contained' onClick={handeldele}>delete</Button>
      </Box>

      </Box>
      <Box>
        <ul>
          <li>{userd.name}</li>
          <li>{userd.gender}</li>
          <li>{userd.grade}</li>


        </ul>
      </Box>
    </Box>
  );
};

export default Signup;
