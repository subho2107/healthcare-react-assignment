import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import PatientsList from './Components/PatientsList/PatientsList'
import SelectedPatientDetails from './Components/SelectedPatientDetails/SelectedPatientDetails'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const userToHardCode = 'Jessica Taylor';
  const apiUserName = 'coalition';
  const apiPassword = 'skills-test';

  useEffect(() => {
    const fetchUsers = async() => {
      try{
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
          headers: {
            'Authorization': 'Basic ' + btoa(apiUserName + ':' + apiPassword)
          }
        });
        if(!response.ok){
          throw new Error('Failed to fetch users');
        }
        const fetchedUsers = await response.json();
        fetchedUsers.map((user) => {
          if(user.name === userToHardCode){
            setSelectedUser(user);
          }
          return user;
        });
        setUsers(fetchedUsers);
      } catch (error) {
        alert('Failed to fetch users');
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className='bg-gray-50 w-full h-full grid-rows-[1fr_10fr] grid'>
    
      <Navbar/>
      <div className='grid grid-cols-[1fr_5fr]'>
        <PatientsList users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} hardCodedSelectedUser={userToHardCode}/>
        <SelectedPatientDetails user={selectedUser}/>
      </div>
    </div>
  )
}

export default App
