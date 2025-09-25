import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const[user, setUser]=useState(null);
  const[loading, setLoading]= useState(true);

   const fetchUser= () => {
     setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
          setUser(data.results[0]);
          setLoading(false);
        })
      .catch((err) => {
        console.error('Error:', err);
         setLoading(false);
      });
    };
   useEffect(() =>{
    fetchUser();
   }, []);

   if(loading){
    return <h2 className="text-center mt-10">Loading....</h2>;
   }

  return (
    <>
     <div className="flex justify-center item-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-80">
        <img src={user.picture.large} alt="user" className="rounded-full mx-auto mb-4 shadow"/>
        <h1 className="text-xl font-bold">{user.name.first} {user.name.last}</h1>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-500 mt-2 "> {user.location.city}, {user.location.country}</p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition" onClick={fetchUser}> GET NEW USER</button>
      </div>
     </div>
      
    </>
  )
}

export default App
