import React, { useState, useEffect } from 'react';
import {Container,Box,TextField,Button,Typography,Avatar,Link,List,ListItem,ListItemText} from '@mui/material';
const SessionStorage=()=>{
  const [userd, setUserd] = useState({_id:'',email:'',password:'',name:'',registerNo:''});
  const [allUsers,setAllUsers]=useState([]); 
  const [filterName,setFilterName]=useState(''); 
  const [filteredUsers,setFilteredUsers]=useState([]); 
  useEffect(()=>{
    const storedData=sessionStorage.getItem('Usersession');
    if (storedData){
      const parsed=JSON.parse(storedData);
      setAllUsers(parsed);
      setFilteredUsers(parsed);
    }
  }, []);

  const handleChange=(e)=>{
    setUserd({ ...userd,[e.target.name]:e.target.value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const existingData=JSON.parse(sessionStorage.getItem('Usersession')) || [];
    const newData=[...existingData, userd];
    sessionStorage.setItem('Usersession', JSON.stringify(newData));
    setAllUsers(newData);
    setFilteredUsers(newData);
    alert('User registered successfully!');
    setUserd({ _id: '', email: '', password: '', name: '', registerNo: '' });
  };
  const handleDelete = (nameToDelete) => {
    const updatedData = allUsers.filter((user) => user.name !== nameToDelete);
    sessionStorage.setItem('Usersession', JSON.stringify(updatedData));
    setAllUsers(updatedData);
    setFilteredUsers(updatedData);
    alert(`User "${nameToDelete}" deleted`);
  };

  const handleFilter=(e)=>{
    const value=e.target.value;
    setFilterName(value);
    if (!value.trim()) {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  };
  return (
    <Container maxWidth="xs">
      <Box mt={4}>
        <Typography variant="h5" align="center">Session Register</Typography>
        <form onSubmit={handleSubmit}>
          <Avatar
            src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
            sx={{ width: 75, height: 75, margin: 'auto' }}
          />
          <TextField fullWi margin="normal" label="Name" name="name" value={userd.name} onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Email" name="email" value={userd.email} onChange={handleChange}
          />
          <TextField fullWidth margin="normal" label="Register No" name="registerNo" value={userd.registerNo} onChange={handleChange}
          />
          <TextField fullWidth margin="normal" label="Password" type="password" name="password" value={userd.password} onChange={handleChange}/>
          <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
        <Box mt={4}>
          <TextField fullWidth margin="normal" label="Filter by Name" value={filterName} onChange={handleFilter}/>
        </Box>
        <Box mt={4}>
          <Typography variant="h6">Registered Users:</Typography>
          {filteredUsers.length > 0 ? (
            <List>
              {filteredUsers.map((user, index) => (
                <ListItem
                  key={index}
                  sx={{border: '1px solid #ccc', borderRadius: 1, mb: 1 }}
                  secondaryAction={
                    <Button color="error" variant="contained" size="small" onClick={() => handleDelete(user.name)}>
                      Delete
                    </Button>
                  }
                >
                  <ListItemText primary={user.name} secondary={`Email: ${user.email}, Reg No: ${user.registerNo}`}/>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography color="text.secondary">No users found.</Typography>
          )}
        </Box>
        <Box mt={2} textAlign="center">
          <Link href="/">Already have an account?</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default SessionStorage;
