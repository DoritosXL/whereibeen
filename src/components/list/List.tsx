import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import "./List.css"
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { TextField } from "@mui/material";
import LocationDetail from "../location_detail/LocationDetail";

export default function List() {  
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return console.log('loading... not signed in yet');    
    // if error log and display message accordingly
  }, [user, loading, navigate]);

  const [locationState, setLocationState] = useState(
      {
          inputLocation: "",
          locations: []
      }
  )

  const handleChange = (event) => {
      setLocationState({...locationState, inputLocation: event.target.value})
  };

  const handleSubmit = (event) => {
      setLocationState({...locationState, locations: locationState.locations.concat(locationState.inputLocation)})      
      event.preventDefault();
  };

  return(
    <div>
      {user ? (
        <div className="list_box">
          hi {user.displayName}
          <br/>
          <br/>          
          <Box>
            <Paper elevation={3}>
              <form onSubmit={handleSubmit}>
                <label>
                  Location:
                  <input type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>   
              <LocationDetail location={locationState.locations}></LocationDetail>
            </Paper>
          </Box>
          
        </div>
      ): (
        <div>Not signed in... go to the sign in <a href="/">page</a></div>
      )}
    </div>
  )
}
