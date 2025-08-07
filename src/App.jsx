import React, { useState } from 'react'
import  Autocomplete  from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcCall from '@mui/icons-material/AddIcCall';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PowerOffOutlined from '@mui/icons-material/PowerOffOutlined';
const App = () => {
  const names=[{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'},{u1:'akash',img:'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'}];
  const buttons=[<Button key={"btn1"}>button1</Button>,];
  const [menu,setMenu]=useState(" ");
  const menuchange=(event)=>{
    setMenu(event.target.value)
  }
  return (
    <div>
      <p>Auto Complete</p>
      <Autocomplete
      options={names}
      sx={{width:300}}
      autoHighlight
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
        srcSet={`https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww `}
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
      <div>
        <p>Group button</p>
      <ButtonGroup size='small' variant='contained'>
        <Button  variant='contained' onClick={()=>alert("alert message")}>alert btn</Button>
        <Button variant='outlined'>submit btn</Button>
        <Button  variant='text'>cancel btn</Button>

      </ButtonGroup>
      <div>
      <ButtonGroup size='small' variant='contained'>
       {buttons}
      </ButtonGroup>
      </div>
      <div>
        <p>FormGroup</p>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked color='success'/> } label="form1"/>
        <FormControlLabel control={<Checkbox  /> } label="form2" />
        <FormControlLabel control={<Checkbox  /> } label="form3" />

      </FormGroup>
      </div>
      <div>
        <p>Icons</p>
      <Fab color='success'>
        <AddIcCall/>
      </Fab>
      </div>
      <div><p>radio button</p>
      <FormGroup>
      <RadioGroup defaultValue="student 1">
        <FormControlLabel value={'student 1'} control={<Radio/>} label="student 1"/>
        <FormControlLabel value={'student 2'} control={<Radio/>} label="student 3"/>
        <FormControlLabel value={'student 3'} control={<Radio/>} label="student 2"/>

      </RadioGroup>
      </FormGroup>
      </div>
      <div>
        <FormGroup sx={{margin:10}}>
          <InputLabel id="id1">Menu</InputLabel>
          <Select value={menu} onChange={menuchange} labelId='id1' sx={{margin:10}}>
            <MenuItem value={20}>menu 1</MenuItem>
            <MenuItem value={30}>menu 2</MenuItem>
            <MenuItem value={40}>menu 3</MenuItem>

          </Select>
        </FormGroup>
      </div>
      <div>
        <p>Input</p>
        <Box>
      <TextField type='text'  label="user name" variant='filled' multiline maxRows={3} placeholder='enter your name' />
      <TextField type='password' label="password" variant='filled'/>
      <TextField type='email' label="user email" variant='filled'/>
      <TextField type='email' label="user address" variant='filled' multiline maxRows={3}/>

</Box>
      </div>
      <div>
        <p>Avatar</p>
        <Avatar src='https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'/>
        <Avatar src='https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww'/>
      <p>Badge</p>
      <Badge badgeContent={4} >
        <EmailOutlined/>
      </Badge>
      <Badge badgeContent={10} >
        <PowerOffOutlined/>
      </Badge>
      </div>
      </div>
    </div>
    
  )
}
export default App