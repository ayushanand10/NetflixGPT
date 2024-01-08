import React, { useRef, useState } from "react"
import Header from "./Header"
import { validateData } from "../utils/validate"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"

const Login = () => {
  const navigate = useNavigate()
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
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocKL2unFJfuc6r-uYF34GFCRB6W1cdh7nu8-BjZfrO55N2k=s382-c-no",
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

              navigate("/browse")
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
          navigate("/browse")
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
          src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='bg-login'
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
