import { useEffect, useState } from "react";
import { useAuth } from '../Contexts/AuthContext';
import { Link } from "react-router-dom";
import axios from "axios";
import './admin.css';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
const Admin = () => {
  const [users, setUsers] = useState([]);
  const  {
        authUser,
        setAuthUser,
        isloggedin,
        setIsloggedin
    } = useAuth();
  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const token=localStorage.getItem('token')
      console.log(token)
      console.log("tried");
      const res = await axios.get("http://localhost:5000/users", {
        
        headers: {
          'Authorization':token,
         
        },
        credentials: "include",
      });
      const object=await res.data;
      setAuthUser(object);
      console.log("hi");
      console.log(object);
    } catch (error) {
      console.log(error);
    }
  };

  //   delelte the user on delete button
   const deleteUser = async (id) => {
     try {
      console.log("trying")
      const token=localStorage.getItem('token')
       const res = await axios.delete(`http://localhost:5000/users/delete/${id}`, {
         
         headers: {
           'Authorization': token,
         },
        credentials: "include",
       });
       const data = await res.data;
       console.log("kya be");

       
         getAllUsersData();
       
     } catch (error) {
       console.log(error);
     }
   };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="cot">
          <h1 className="flex justify-center font-bold text-2xl">Admin Users Data </h1>
        </div>
        <div className="container  admin-users flex justify-center">
          <table className="border-4 rounded-xl">
            <thead className="bg-[#111827] text-white">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Items</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {authUser?.map((authUser, index) => {
                return (
                  <tr className="" key={index}>
                    <td className="flex justify-center">{authUser.name}</td>
                    <td className="flex justify-center">{authUser.email_id}</td>
                    <td className="flex justify-center">
                    <ul>
                        {authUser.list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.item_name}</li>
                        ))}
                      </ul>
                    </td>
                    
                    <td className="flex justify-center">
                      <Link to={`/admin/users/${authUser._id}/edit`}><FaEdit /></Link>
                    </td>
                    <td className="flex justify-center">
                       <button
                        className="btn"
                        onClick={() => deleteUser(authUser._id)}
                      >
                        <MdDeleteForever/>
                      </button> 
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default Admin;