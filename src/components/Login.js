import React, { useRef, useState } from "react"
import Header from "./Header"
import { validateData } from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { LOGIN_BG } from "../utils/constants"
import { USER_AVATAR } from "../utils/constants"

const Login = () => {
  const dispatch = useDispatch()
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const [isSignIn, setIsSignIn] = useState(true)
  const [errMsg, setErrMsg] = useState(null)

  const handleSubmit = () => {
    // validate the form

    const message = validateData(email.current.value, password.current.value)
    setErrMsg(message)

    if (message) return

    // Authentication Part
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user
          console.log(user)

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!

              // Updating the store with UserName and Profile photo
              const { uid, email, displayName, photoURL } = user
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              )
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error.message)
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrMsg(errorCode + " - " + errorMessage)
        })
    } else {
      // Sign In (Login) Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          setErrMsg(errorCode + " - " + errorMessage)
        })
    }
  }

  const toggleForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className=''>
      <Header />
      <div className='absolute'>
        <img
          src={LOGIN_BG}
          alt='login-bg'
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className='w-3/12 absolute p-10 bg-black/80 my-36 mx-auto right-0 left-0 text-white flex flex-col rounded-md'
      >
        <h1 className='font-medium text-2xl py-2 mb-4'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className='p-2 my-1 bg-slate-900 w-full rounded-md'
            ref={name}
            type='text'
            name=''
            id=''
            placeholder='Full Name'
          />
        )}
        <input
          className='p-2 my-1 bg-slate-900 w-full rounded-md'
          ref={email}
          type='text'
          name=''
          id=''
          placeholder='Email'
        />
        <input
          className='p-2 my-1 bg-slate-900 w-full rounded-md'
          ref={password}
          type='password'
          name=''
          id=''
          placeholder='Password'
        />
        <p className='text-sm font-bold text-red-600'>{errMsg}</p>
        <button
          onClick={handleSubmit}
          className='p-2 my-4 bg-red-600 w-full text-sm font-medium rounded-md'
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className='text-sm mt-3 cursor-pointer hover:underline'
          onClick={toggleForm}
        >
          {isSignIn ? "New to Netflix? Sign Up" : "Already Registered? Log In"}
        </p>
      </form>
    </div>
  )
}

export default Login
