import { useState,useEffect } from 'react'
import Axios from 'axios';

import './App.css'

function App() {
  const [foodName,setFoodName]=useState("");
  const [day,setDays]=useState(0);
  const [newFoodName,setNewFoodName]=useState("");
  const [foodList,setFoodList]=useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:4000/read").then((response=>{
      setFoodList(response.data);
    }))
    
  },[foodList]);
  const addToList=()=>{
    Axios.post('http://localhost:4000/insert',{
      foodName:foodName,
      day:day,
    })
  }
  const updateFood=(id)=>{
    Axios.put('http://localhost:4000/put',{
      id:id,
      foodName:newFoodName,
    })
  }
  const deleteFood=(id)=>{
    Axios.delete(`http://localhost:4000/delete/${id}`,{
      id:id,
      
    })
  }

  return (
    <>
     <div className='App'>
      <h1>CRUD APPLICATION</h1>
      <label>Food Name</label>
      <input type="text" onChange={(e)=>setFoodName(e.target.value)} />
      <label>Days</label>
      <input type="text" onChange={(e)=>setDays(e.target.value)} />
      <button onClick={addToList}>Add to list</button>
      <h1>Food List</h1>
      {
        foodList.map((val,key)=>{
          return (
            <div className='food' key={key}>
              <h1>{val.foodName}</h1>
              <h1>{val.day}</h1>{" "}
              <input type="text" placeholder='new food name...' onChange={(e)=>setNewFoodName(e.target.value)} />
              <button onClick={()=>updateFood(val._id)}>Update</button>
              <button onClick={()=>deleteFood(val._id)}>Delete</button>
            </div>
          )
        })
      }

     </div>
    </>
  )
}

export default App
// import { useState, useEffect } from 'react';
// import Axios from 'axios';
// import './App.css';

// function App() {
//   const [foodName, setFoodName] = useState("");
//   const [day, setDays] = useState();
//   const [newFoodName, setNewFoodName] = useState("");
//   const [foodList, setFoodList] = useState([]);

//   // Function to get food list from the server
//   const getFoodList = () => {
//     Axios.get("http://localhost:4000/read").then((response) => {
//       setFoodList(response.data);
//     });
//   };

//   // Call getFoodList once on component mount
//   useEffect(() => {
//     getFoodList();
//   }, []);

//   // Function to add a new food item
//   const addToList = () => {
//     Axios.post('http://localhost:4000/insert', {
//       foodName: foodName,
//       day: day,
//     }).then(() => {
//       getFoodList(); // Fetch the updated food list after adding
//     });
//   };

//   // Function to update a food item
//   const updateFood = (id) => {
//     Axios.put('http://localhost:4000/put', {
//       id: id,
//       newFoodName: newFoodName,
//     }).then(() => {
//       getFoodList(); // Fetch the updated food list after updating
//     });
//   };

//   // Function to delete a food item
//   const deleteFood = (id) => {
//     Axios.delete(`http://localhost:4000/delete/${id}`).then(() => {
//       getFoodList(); // Fetch the updated food list after deleting
//     });
//   };

//   return (
//     <>
//       <div className='App'>
//         <h1>CRUD APPLICATION</h1>
//         <label>Food Name</label>
//         <input type="text" onChange={(e) => setFoodName(e.target.value)} />
//         <label>Days</label>
//         <input type="text" onChange={(e) => setDays(e.target.value)} />
//         <button onClick={addToList}>Add to list</button>
//         <h1>Food List</h1>
//         {foodList.map((val, key) => {
//           return (
//             <div className='food' key={val._id}>
//               <h1>{val.foodName}</h1>
//               <h1>{val.day}</h1>{" "}
//               <input
//                 type="text"
//                 placeholder='new food name...'
//                 onChange={(e) => setNewFoodName(e.target.value)}
//               />
//               <button onClick={() => updateFood(val._id)}>Update</button>
//               <button onClick={() => deleteFood(val._id)}>Delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;
