const Auth = {
  isLoggedIn: localStorage.getItem('x-access-token'),
  onAuthenticated() {
    this.isLoggedIn = localStorage.getItem('x-access-token');
  },
  getLoggedInStatus() {
    return this.isLoggedIn;
  },
};

export default Auth;
