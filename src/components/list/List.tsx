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



function List() {  
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return console.log('loading... not signed in yet');    
    // if error log and display message accordingly
  }, [user, loading, navigate]);

  return(
    <div>
      {user ? (
        <div className="list_box">
          {/* hi {user.displayName} */}
          <Box>
            <Paper elevation={3}>
              {/* <TextField></TextField> */}
            </Paper>
          </Box>
          
        </div>
      ): (
        <div>Not signed in... go to the sign in <a href="/">page</a></div>
      )}
    </div>
  )
}

export default List