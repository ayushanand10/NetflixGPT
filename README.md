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
- Removing all the hard-coded strings from our app and storing them in a *constants* file
- Register TMDB API and get access token
- Get data from TMDB *now playing movies list* API
- Create **moviesSlice** for storing the *nowPlayingMovies* data in our *Redux store*
- Create a custom hook for API calling and making our *Browse* component clean
- UI planning of the *MainContainer* & *SecondaryContainer*
- Fetch data for trailer video
- Add trailer video data to our *redux store*
- Embed the youtube trailer video and make it mute and then autoplay  
- Work on Secondary Component
    - It consists of multiple MovieLists and each List will further consists of multiple MovieCards
- Fetched Popular Movies, Top-Rated Movies and stored then in Redux store
- GPT Search Feature
- Create *GPTSlice* for storing the data in our store
- Add search button on the header
- Handle the toggle functionality
- Create *GptSearch* component and call it from the *Browse* component
- Make support of multiple languages
    - creating separate file for all the string constants with all the languages 
    - Make list of languages in the *Constants* file for making a dropdown for selecting languages in the header(Navbar)
- Create *configSlice* for storing the language preference for the user
    - This *configSlice* can be used to store themes, language, etc which are specific to the current instance of our app
- Work with GPT API
    - Create a new Openai a/c to use free credit of $5 
    - Get API key
    - Store in a constant file and create *openai.js* file
    - Call the API from *SearchBar* component with
        - Extracted input text with help of *useRef* hook
        - resolve the error by allowing *dangerouslyAllowBrowser: true* in *openai.js* file
    - split the response of API
    - Call TMDB API with GPT's movies responses 
        - Resolve the Promises using *Promise.all()*
- Store API response in the *redux store* mainly in the *gptSlice*
- Reuse the *MovieList* component and show the Movie Results
- Hide the API of *openai* and *TMDB* in *.env* file 
- Memoization : While going to GPTSearch and then returning back to Home page all the API(s) are called again and if doing this multiple times altogethar increases the load of the website and thus making it slow
    - To avoid this situation we check the store before hand while calling the API
- Creating the mobile view for our app


# Features
- Login / Sign Up
    - Sign In / Sign Up Form
    - Redirect to Browse Page
- Browse (after Authentication)
    - Header
    - Main Movie(Main Container)
        - Trailer in BackGround
        - Title & Description
    - Movie Suggestions (Secondary Container)
        - Movie Lists * n
            - Cards * n
- Netflix GPT
    - Search Bar
    - Movie Suggestion
    - Multi lingual


#3.08hr