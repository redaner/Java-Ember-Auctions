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

    @Inject
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Inject
    public void setFormFactory(FormFactory formFactory) {
        this.formFactory = formFactory;
    }

    @Transactional
    public Result register() {
        try {
            Form<RegisterForm> registerForm = formFactory.form(RegisterForm.class);

            User user = userService.register(registerForm.bindFromRequest().get());

            setToken(user);

            return ok(Json.toJson(user));
        }
        catch(Exception e) {
            return badRequest(e.getMessage());
        }
    }

    @Transactional
    public Result login() {
        try {
            Form<LoginForm> loginForm = formFactory.form(LoginForm.class);

            User user = userService.login(loginForm.bindFromRequest().get());

            if (user != null) {
                setToken(user);
                return ok(Json.toJson(user));
            }
            else {
                return badRequest("Invalid login data!");
            }
        }
        catch (Exception e) {
            return badRequest(e.getMessage());
        }
    }

    @Transactional
    public Result getCurrentUser() {
        try {
            User user = currentUser();

            if (user != null) {
                return ok(Json.toJson(user));
            } else {
                return badRequest(Json.toJson("User is not logged in."));
            }
        }
        catch (Exception e) {
            return badRequest(Json.toJson("User is not logged in."));
        }
    }

    @Transactional
    public Result logout() {
        try {
            removeToken();
            return ok(Json.toJson("Successfully logged out!"));
        }
        catch (Exception e) {
            return badRequest(e.getMessage());
        }
    }
}
