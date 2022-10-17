import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth, signInWithGoogle } from "../../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { Login as DoritosLogin } from "doritosxl-login-page"
import "./Login.css"

function Login() {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (loading) {
      // trigger a loading screen
      return
    }
    if (user) navigate("/list")
  }, [user, loading, navigate])
  return (
    <div className="login">
      <DoritosLogin onClick={signInWithGoogle} Header="Sign in for access" />
    </div>
  )
}
export default Login
