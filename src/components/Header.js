import { signOut } from "firebase/auth"
import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants"
import { toggleGptSearchView } from "../utils/gptSlice"
import { changePreferredLanguage } from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

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

  const handleGptSearchToggle = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changePreferredLanguage(e.target.value))
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
    <div className='absolute z-30 px-4 md:px-8 py-2 w-full bg-gradient-to-b from-black flex flex-col md:flex-row items-center gap-2 justify-between'>
      <img
        className='w-36'
        src={LOGO}
        alt='logo'
      />
      {user && (
        <div className='flex items-center justify-around w-full md:w-auto gap-2 md:gap-4'>
          {showGptSearch && (
            <select
              name=''
              id=''
              className='bg-black/90 px-3 py-1 text-white rounded cursor-pointer'
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            class='px-3 py-1 md:mr-4 text-lg font-medium bg-netflix text-white  rounded-md transition delay-150 hover:scale-110'
            onClick={handleGptSearchToggle}
          >
            {!showGptSearch ? "GPT Search" : "Home"}
          </button>
          <div className='flex items-end gap-1'>
            <img
              className='hidden md:block w-8'
              src={user.photoURL}
              alt='userIcon'
            />
            <button
              onClick={handleSignOut}
              className='text-white transition ease-in hover:-translate-y-1 hover:scale-125 hover:underline '
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
