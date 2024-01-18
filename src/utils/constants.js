export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

export const USER_AVATAR =
  "https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API,
  },
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hin", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API