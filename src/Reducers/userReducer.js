
const userDetailState={
  userKey:"xxx",
  email:"xxx@xxx.xxx",
  picPath:"http://bulma.io/images/placeholders/128x128.png",
  dataPost:[]
}

export default function userReducer(state = userDetailState, action) {
  switch (action.type) {
    case "setUserKey": {
      return(
        state={
          userKey:action.payload,
          email:state.email,
          picPath:state.picPath,
          dataPost:state.dataPost
        })
    }
    case "setEmail": {
      return(
        state={
          userKey:state.userKey,
          email:action.payload,
          picPath:state.picPath,
          dataPost:state.dataPost

        })
    }
    case "setPicPath": {
      return(
          state={
            userKey:state.userKey,
            email:state.email,
            picPath:action.payload,
            dataPost:state.dataPost

          })
    }
    case "setDataPost": {
      return(
        state={
          userKey:state.userKey,
          email:state.email,
          picPath:state.picPath,
          dataPost:action.payload
        })
    }

    default:
      return state
  }
}
