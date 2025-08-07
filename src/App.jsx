import React from 'react'
import  Autocomplete  from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
const App = () => {
  const names=[{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'}];
  return (
    <div>
      <Autocomplete
      options={names}
      sx={{width:300}}
      autoHighlight
      id="country-select-demo"
      getOptionLabel={(lab)=>lab.u1}
      
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
        srcSet={`https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww 2x`}
        src={'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'}
        alt=''
        />
        {options.u1}
        
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
      />
    </div>
  )
}
export default App