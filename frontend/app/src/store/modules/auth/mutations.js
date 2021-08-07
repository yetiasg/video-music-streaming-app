export default{
  setUserData(state, payload){
    state.name = payload.name
    state.token = payload.token
    state.refreshToken = payload.refreshToken
    state.userId = payload.userId
    state.expiresIn = payload.expiresIn
    state.isAuth = true
  },

  logout(state){
    state.name = null
    state.token = null
    state.refreshToken = null
    state.userId = null
    state.isAuth = false
  },

  setAutoLogout(state){
    state.didAutoLogout = true;
  },

  isAuthenticated(state, payload){
    state.isAuth = payload
  }
}