import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const[user, setUser]=useState(null);
  const[loading, setLoading]= useState(true);
   useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
          setUser(data.results[0]);
          setLoading(false);
        })
      .catch((err) => console.error('Error:', err));

   },[]);
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
      </div>
     </div>
      
    </>
  )
}

export default App
