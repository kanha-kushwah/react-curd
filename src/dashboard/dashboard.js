import React ,{useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



function Dashboard() {


  const signupSuccess = sessionStorage.getItem('token');

  if (signupSuccess === 'token') {
    toast("login sucess")
    sessionStorage.removeItem('signupSuccess');
}


    const [items, setItems] = useState([]);
    const [updatedData, setUpdatedData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:4000/api/items');
            setItems(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); 

 
      const handledelete = async (itemId) => {
        
        try {
            // Make a DELETE request to delete the item
            const response = await axios.delete(`http://localhost:4000/api/items/${itemId}`); // Replace with your actual API endpoint
            console.log(response.data); // Log the deleted item
            // Optionally, update the state to reflect the deletion
            setItems(items.filter(item => item._id !== itemId));
          } catch (error) {
            console.error('Error deleting item:', error);
          }
      }


      const handleUpdate = async (userId) => {
        try {
          const response = await axios.put(`http://localhost:4000/api/items/${userId}`, updatedData[userId]);
    
          if (response.status === 200) {
            console.log('User data updated successfully');
          } else {
            console.error('Failed to update user data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      const handleChange = (userId, field, value) => {
        setUpdatedData((prevData) => ({
          ...prevData,
          [userId]: {
            ...prevData[userId],
            [field]: value,
          },
        }));
      };

const myStyles = {
    background: '#000'
}
const form = {
  width: '100%',
  border: 'none',
  pointerevents: 'none'
}


  return (
    <div className='container py-4'  style={myStyles}>

<ToastContainer/>

        
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Number</th>
      <th scope="col">email</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
        {items.map((user, index) => (
          <tr key={user._id}>
            <th scope="row">{index + 1}</th>
            <td>
              <input style={form}
                type="text"
                value={updatedData[user._id]?.firstname || user.firstname}
                onChange={(e) => handleChange(user._id, 'firstname', e.target.value)}
              />
            </td>
            <td>
              <input  style={form}
                type="text"
                value={updatedData[user._id]?.lastname || user.lastname}
                onChange={(e) => handleChange(user._id, 'lastname', e.target.value)}
              />
            </td>
            <td>
              <input style={form}
                type="number"
                value={updatedData[user._id]?.mobile || user.mobile}
                onChange={(e) => handleChange(user._id, 'mobile', e.target.value)}
              />
            </td>
            <td>
              <input style={form}
                type="text"
                value={updatedData[user._id]?.email || user.email}
                onChange={(e) => handleChange(user._id, 'email', e.target.value)}
              />
            </td>
            <td>
              <button onClick={() => handleUpdate(user._id)}>update</button>
              <button onClick={() => handledelete(user._id)}>delete</button>

            </td>
          </tr>
        ))}
      </tbody>
</table>

    </div>
  )
}

export default Dashboard