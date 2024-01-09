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
    - Update Profile API call done for adding *userName* and *profileIMG*
> A bug - if the user is not logged-in, then also it can access the */browse* page by altering the URL of the page; a logged-in user can access the *sign-up page* the same way
> * This happens because we are not checking auth during the render of our */browse* or *login* page
> * We have the API(eventListener) *onAuthStateChanged* in our *Body* component and we should be redirecting inside on this API for which we need to use **useNavigate** but it is giving us an error of not using *useNavigate* inside <Router> 
> * Router is used in the Body component itself thus we can use *useNavigate* in the hierarchy below the Body, i.e., inside the *<Login />* or *<Browse />* or their children
> * Possible solutions 
>   - Shift the appRouter from *Body* to *App* component  
>   - Shift the API(eventListener) inside the hierarchy (*<Login />* or *<Browse />* or their children)
> Thus shifting the API in a component which is present in all the pages, i.e., **<Header />** 
- Unsubscribed to the onAuthStateChanged callback


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


# 016hr