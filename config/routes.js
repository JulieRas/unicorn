module.exports.routes = {
  "post /me/reset": "MeController.reset",
  "post /test": "TestController.create",
  "get /user": "UserController.get_find",
  "get /": "Home$Controller.find",
  "post /login": "LoginController.create",
  "post /user": "UserController.post_create",
  "post /integration/facebook": "IntegrationController.facebook",
  "put /me": "MeController.put_update",
  "get /me": "MeController.get_find",
  "post /logout": "LogoutController.create",
  "post /me/authenticate": "MeController.authenticate",
  "get /integration": "IntegrationController.find",
  "get /integration/user": "IntegrationController.user",
  "get /user/facebook": "UserController.facebook",
  "post /forgot": "ForgotController.create",
  "get /user/:id": "UserController.get_$id",
  "delete /user/:id": "UserController.delete_$id"
};