import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  filteredUsers: [],
  userd: {_id: '',email: '',password: '',name: '',registerNo: '',}, filterName: '',};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUsersFromSession:(state)=>{
      const storedData=JSON.parse(sessionStorage.getItem('Usersession')) || [];
      state.allUsers=storedData;
      state.filteredUsers=storedData;
    },
    updateUserd:(state, action)=>{state.userd = {...state.userd,...action.payload,};
    },
    registerUser: (state)=>{
      const newData=[...state.allUsers, state.userd];
      sessionStorage.setItem('Usersession', JSON.stringify(newData));
      state.allUsers=newData;
      state.filteredUsers=newData;
      state.userd={_id: '',email: '',password: '',name: '',registerNo: '',};
    },
    deleteUser:(state,action)=>{
      const updated=state.allUsers.filter((user)=>user.name !==action.payload);
      sessionStorage.setItem('Usersession',JSON.stringify(updated));
      state.allUsers=updated;
      state.filteredUsers=updated;
    },
    filterByName:(state,action) => {
      const value=action.payload;
      state.filterName=value;
      if (!value.trim()){
        state.filteredUsers=state.allUsers;
      } else {
        state.filteredUsers=state.allUsers.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        );
      }
    },
  },
});
export const {loadUsersFromSession,updateUserd,registerUser,deleteUser,filterByName,}=userSlice.actions;
export default userSlice.reducer;
