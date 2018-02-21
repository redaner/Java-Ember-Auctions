package controllers;

import forms.LoginForm;
import forms.RegisterForm;
import models.User;
import play.data.Form;
import play.data.FormFactory;
import play.db.jpa.Transactional;
import play.libs.Json;
import play.mvc.Result;
import services.UserService;

import javax.inject.Inject;

public class UserController extends BaseController {

    private UserService userService;
    private FormFactory formFactory;

    /**
     * Sets service which will then be used
     * to communicate with the database.
     * @param userService
     */
    @Inject
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    /**
     * Sets form factory which will then be used
     * to create needed forms for creating User objects
     * out of the request data.
     * @param formFactory
     */
    @Inject
    public void setFormFactory(FormFactory formFactory) {
        this.formFactory = formFactory;
    }

    /**
     * Method is called when a POST request is sent to
     * /api/v1/register, it is used to call a service to
     * write a user in the database, and also give the
     * registered user the current session.
     * @return the result
     */
    @Transactional
    public Result register() {
        try {
            Form<RegisterForm> registerForm = formFactory.form(RegisterForm.class);

            User user = userService.register(registerForm.bindFromRequest().get());

            setToken(user);

            return ok(Json.toJson(user));
        } catch (Exception e) {
            return badRequest(e.getMessage());
        }
    }

    /**
     * Method is called when a POST request is sent to
     * /api/v1/login, it is used to give the current
     * session to the logged in user.
     * @return
     */

    @Transactional(readOnly = true)
    public Result login() {
        try {
            Form<LoginForm> loginForm = formFactory.form(LoginForm.class);

            User user = userService.login(loginForm.bindFromRequest().get());

            if (user != null) {
                setToken(user);
                return ok(Json.toJson(user));
            } else {
                return badRequest("Invalid login data!");
            }
        } catch (Exception e) {
            return badRequest(e.getMessage());
        }
    }

    /**
     * Method is called when a GET request is sent
     * to /api/v1/getCurrentUser, it is used primarily
     * for dynamically updating the frontend based on the
     * logged in user.
     * @return the result
     */

    @Transactional(readOnly = true)
    public Result getCurrentUser() {
        try {
            User user = currentUser();

            if (user != null) {
                return ok(Json.toJson(user));
            } else {
                return unauthorized(Json.toJson("User is not logged in."));
            }
        } catch (Exception e) {
            return unauthorized(Json.toJson("User is not logged in."));
        }
    }

    /**
     * Method is called when a GET request is sent
     * to /api/v1/logout, it is used to free the
     * current active session.
     * @return the result
     */

    @Transactional(readOnly = true)
    public Result logout() {
        try {
            removeToken();
            return ok(Json.toJson("Successfully logged out!"));
        } catch (Exception e) {
            return unauthorized("Logout failed!");
        }
    }

    @Transactional(readOnly = true)
    public Result getAllSellers() {
        try {
            return ok(Json.toJson(userService.getAllSellers()));
        } catch (Exception e) {
            return badRequest("Can't return all sellers!");
        }
    }
}
