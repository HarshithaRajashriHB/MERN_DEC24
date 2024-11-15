
import { useState, useEffect } from 'react';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home=()=> {
  const [restoName, setRestoName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [topFood, setTopFood] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [restoList, setRestoList] = useState([]);


  const getRestoList = () => {
    Axios.get("http://localhost:5000/read").then((response) => {
      setRestoList(response.data);
    });
  };

 
  useEffect(() => {
    getRestoList();
  }, []);

 
  const addToList = () => {
    Axios.post('http://localhost:5000/insert', {
      restoName,
      location,
      rating,
      topFood
    }).then(() => {
      getRestoList(); // Fetch the updated food list after adding
    });
  };

  // Function to update a food item
  const updateResto = (id) => {
    Axios.put('http://localhost:5000/put', {
      id,
      location: newLocation,
    }).then(() => {
      getRestoList(); // Fetch the updated food list after updating
    });
  };

  // Function to delete a food item
  const deleteResto = (id) => {
    Axios.delete(`http://localhost:5000/delete/${id}`).then(() => {
      getRestoList(); // Fetch the updated food list after deleting
    });
  };

  return (
    <div>
    <div className="App container my-4">
       
    
      <h1 className="text-center mb-4">Restaurant Admin</h1>
      <div className="mb-4">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Restaurant Name</label>
            <input type="text" className="form-control" onChange={(e) => setRestoName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Location</label>
            <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Rating</label>
            <input type="text" className="form-control" onChange={(e) => setRating(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label">Top Food</label>
            <input type="text" className="form-control" onChange={(e) => setTopFood(e.target.value)} />
          </div>
          <div className="col-12">
            <button type="button" className="btn btn-primary" onClick={addToList}>Add to List</button>
          </div>
        </form>
      </div>
      <h2 className="text-center mb-4">Restaurant List</h2>
      <div className="row">
        {restoList.map((val) => (
          <div className="col-md-4 mb-4" key={val._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{val.restoName}</h5>
                <p className="card-text"><strong>Location:</strong> {val.location}</p>
                <p className="card-text"><strong>Rating:</strong> {val.rating}</p>
                <p className="card-text"><strong>Top Food:</strong> {val.topFood}</p>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="New location..."
                  onChange={(e) => setNewLocation(e.target.value)}
                />
                <button className="btn btn-warning me-2" onClick={() => updateResto(val._id)}>Update</button>
                <button className="btn btn-danger" onClick={() => deleteResto(val._id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Home;
