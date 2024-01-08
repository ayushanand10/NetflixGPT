# Netflix GPT

- Create React App
- Configured TailwindCss
- Routing
- Header
- Sign In/ Sign Up form
- Form validation
- useRef hook -> used to create a reference to an element (we used here to ref input fields of the form)
- firebase set-up
- hosting on firebase
- authentication of the user (sign in & sign up) using Firebase API 
    - when the user is successfully logged In then we should store the data of the logged-in user in our Redux Store, such that it can be made available in our whole app
- Created Redux Store with userSlice for storing the user data
- We use the onAuthStateChanged API provided by Firebase for extracting current user data
    - It is like an eventListener that will be activated when there is any change in the user
        - So we are going to use it in the *<BODY />* component inside the useEffect hook which will run only once eventually leading to the activation of the eventListeren only once (The rest of the explanation is present in the notes of Class-Based Component)
    - when the user logs in then we should redirect him to the */browse* page
        - Done in the *login* component
- Sign Out done + Sign In + Log In done     


# Features
- Login / Sign Up
    - Sign In / Sign Up Form
    - Redirect to Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie
        - Trailer in BackGround
        - Title & Description
        - Movie Suggestions
            - Movie Lists * n
- Netflix GPT
    - Search Bar
    - Movie Suggestion


# 2.52 hr