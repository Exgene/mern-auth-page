import React, { useState, useContext, createContext } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import axios from 'axios'

import { RegisterForm } from './components/RegisterForm'
import { LoginForm } from './components/LoginForm'

import '../css/form.css'
import 'react-toastify/dist/ReactToastify.css'

const UserContext = createContext()

function Auth({ setAuthState }) {
  const [inUsage, setInUsage] = useState(false)
  return (
    <UserContext.Provider value={{ setInUsage }}>
      {inUsage ? <Register /> : <Login setAuthState={setAuthState} />}
    </UserContext.Provider>
  )
}

const notify = (text, id) => {
  id
    ? toast.success(text, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    : toast.error(text, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
}

const Login = ({ setAuthState }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()
  const [_, setCookies] = useCookies(['access_token'])

  async function onSubmit(event) {
    event.preventDefault()
    try {
      let response = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      })
      console.log(response)
      notify(response.data.message, response.data.statusCode)

      if (!response.data.statusCode) {
        setUsername('')
        setPassword('')
        return
      }

      window.localStorage.setItem('UserID', response.data.id)
      setCookies(response.data.token)
      setAuthState(true)

      setTimeout(() => {
        nav('/main')
      }, 5000)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <LoginForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      UserContext={UserContext}
    />
  )
}

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { setInUsage } = useContext(UserContext)

  async function onSubmit(event) {
    event.preventDefault()
    try {
      let response = await axios.post('http://localhost:3001/auth/register', {
        username,
        password,
        confirmPassword,
      })
      console.log(response)
      notify(response.data.message, response.data.statusCode)
      if (response.data.statusCode) {
        setTimeout(() => {
          setInUsage(false)
        }, 5000)
      }
      setUsername('')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <RegisterForm
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
      onSubmit={onSubmit}
      UserContext={UserContext}
    />
  )
}

export default Auth
