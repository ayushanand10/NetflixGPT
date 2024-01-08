import { signOut } from "firebase/auth"
import React from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
        navigate("/error") // will make an error page later
      })
  }

  return (
    <div className='absolute z-30 px-8 py-2 w-full bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-36'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
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
