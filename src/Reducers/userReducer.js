
const userDetailState={
  userKey:"xxx",
  email:"xxx@xxx.xxx",
  picPath:"http://bulma.io/images/placeholders/128x128.png"
}

export default function userReducer(state = userDetailState, action) {
  switch (action.type) {
    case "setUserKey": {
      return(
        state={
          userKey:action.payload,
          email:state.email,
          picPath:state.picPath
        })
    }
    case "setEmail": {
      return(
        state={
          userKey:state.userKey,
          email:action.payload,
          picPath:state.picPath
        })
    }
    case "setPicPath": {
      return(
          state={
            userKey:state.userKey,
            email:state.email,
            picPath:action.payload
          })
    }

    default:
      return state
  }
}
