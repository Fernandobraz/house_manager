module.exports = {
  isAdmin: function(req, res, next) {

      // if user is authenticated in the session, carry on 
      if (req.user.admin)
          return next();

      // if they aren't redirect them to the home page
      res.redirect('/');
  },
  isSuperAdmin: function(req, res, next) {

      // if user is authenticated in the session, carry on 
      if (req.user.email === "fernandobrazror@gmail.com")
          return next();

      // if they aren't redirect them to the home page
      res.redirect('/');
  },
  isLoggedIn: function(req, res, next) {

      // if user is authenticated in the session, carry on 
      if (req.isAuthenticated())
          return next();

      // if they aren't redirect them to the home page
      res.redirect('/users/login');
  }  
}
