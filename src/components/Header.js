import { signOut } from "firebase/auth"
import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constants"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error") // will make an error page later
      })
  }

  useEffect(() => {
    // activating the eventListener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User logsIn (signIn)
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
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    })

    // unsubscribing to the eventListener when the component unmounts
    return () => unsubscribe()
  }, [])

  return (
    <div className='absolute z-30 px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-36'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex items-center gap-4'>
          <img
            className='w-8'
            src={user.photoURL}
            alt='userIcon'
          />
          <button
            onClick={handleSignOut}
            className='text-white hover:text-red-600 hover:underline'
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
