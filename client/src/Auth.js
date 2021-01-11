const Auth = {
  isLoggedIn: false,

  onAuthenticated() {
    this.isLoggedIn = true;
  },
  getLoggedInStatus() {
    return this.isLoggedIn;
  },
};

export default Auth;
