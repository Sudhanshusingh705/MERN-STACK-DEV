import { AnimatePresence } from 'framer-motion';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import UpdateUser from './UpdateUser';

const UserManager = () => {
    
    const [usersList, setUsersList] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [userFormData, setUserFormData] = useState(null);
    
    const getDataFromBackend = async () => {

        //default request method : GET
        const response = await fetch('http://localhost:5000/user/getall');
        const data= await response.json(); //response.js is an astnchronous fxn 
        console.log(data);
        setUsersList(data); 
        console.log('request sent');
    }
    // getDataFromBackend();
    useEffect(() => {
        getDataFromBackend();
    }, [])

    const deleteUser = async (id) => {
        // alert(id);
        // console.log(id);


        const response = await fetch('http://localhost:5000/user/delete/'+id,{
            method : 'DELETE'
        })
        console.log(response.status);
        getDataFromBackend();
        toast.success('User Deleted')
    }
    const editUser =(userdata) => {
        console.log(userdata);
        setUserFormData(userdata);
        setShowForm(true);
        }

    const showUsers = () => {
        return <table className='table table-white table-striped'>
            <thead >
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    {/* <tr></tr> */}
                </tr>
            </thead>
            <tbody>
                {usersList.map((user, index) => {
                    return <tr className='table-hover' key={index}> 
                    <td>{user._id}</td>
                    <td>{user.email}</td>
                    <td>{user.username  }</td>
                    <td>{user.age}</td>
                    <td><button className='btn btn-outline-primary' onClick={() => {editUser(user)}}>
                        <i class="fa fa-pencil"></i>                        
                        </button> </td>
                    <td><button className='btn btn-outline-danger' onClick={() => {deleteUser(user._id)}}>
                        <i class="fa fa-trash-alt"></i>
                        </button> </td>
                    </tr>
                })}
            </tbody>
        </table>
    }
    
    return (
    <AnimatePresence className = 'container'>
        <h1 className='text-center'> 
        User Manager
        </h1>
        <button onClick={getDataFromBackend}>Refresh</button>
        <div className='row'>
            <div className='col-md'>
        {showUsers()}
        </div>
        {showForm ?
        <div className='col-md'>
        <UpdateUser userFormData={userFormData}/> </div>
        : 
        ""}
    </div>
    </AnimatePresence>
  )
}

export default UserManager