import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import { fetchAllUsers } from '../services/authService';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersFromAPI = await fetchAllUsers();
        setUsers(usersFromAPI);
      } catch (error) {
        const usersFromStorage = JSON.parse(localStorage.getItem('userData') || '[]');
        setUsers(usersFromStorage,error.message);
      }
    };
    loadUsers();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>User Dashboard</Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Register No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? users.map((user) => (
              <TableRow key={user._id || user.email}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.registerno}</TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={3} align="center">No users found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Dashboard;
