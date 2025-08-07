import React from 'react'
import Autocomplete  from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useState,useEffect } from 'react';

const Signup = ({children}) => {
     const [names,setNames]=useState([{name:'akash',email:'abc@gmail.com',registerNo:1234}]);
       useEffect(()=>{
        const fetItem=async()=>{
          const response=await fetch('http://localhost:3000/userval');
          const data=await response.json();
          setNames(data);
        };
        fetItem();
       },[])
  return (
    <div>
        {/* <h1>{names}</h1> */}
        {React.Children.map(children,child=>
            React.cloneElement(child,{data:names})
        )}
        console.log( {names});
      
         {/* <p>Auto Complete</p>
              <Autocomplete
              options={names}
              sx={{width:300}}
              autoHighlight
              getOptionLabel={(lab)=>lab.name}
              renderOption={(prop,options)=>{
                const {key,...setoption}=prop;
                return(
                <Box
                key={key}
                component="li"
                sx={{'&>img':{mr:2,flexShrink:0}}}
                {...setoption}>
                <img
                loading='lazy'
                width='20'
                srcSet={`https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww `}
                src={'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'}
                alt=''
                />
                {options.name} {options.email}
                
              </Box>)}}
              renderInput={(param)=>(
                <TextField {...param} label="student"
                slotProps={{
                  htmlInput:{
                    ...param.inputProps,autoComplete:'new-password',
                  }
                }
                  
                }
                />
              )}
              /> */}
    </div>
  )
}

export default Signup