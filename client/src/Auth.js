const Auth = {
  isLoggedIn: false,

  onAuthenticated() {
    this.isLoggedIn = localStorage.getItem('x-access-token');
  },
  getLoggedInStatus() {
    return this.isLoggedIn;
  },
};

export default Auth;
