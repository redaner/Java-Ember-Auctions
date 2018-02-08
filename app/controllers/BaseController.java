package controllers;

import helpers.SessionHelper;
import models.User;
import play.mvc.Controller;
import services.AuthenticationService;

import javax.inject.Inject;

public abstract class BaseController extends Controller{

    private AuthenticationService authenticationService;

    public BaseController() {

    }

    @Inject
    public void setAuthenticationService(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    public void setToken(User user) {
        SessionHelper.setToken(authenticationService.setToken(user));
    }

    public User currentUser() {
        if (SessionHelper.hasToken()) {
            return authenticationService.find(SessionHelper.getToken());
        }
        else {
            return null;
        }
    }

    public void removeToken() {
        SessionHelper.removeToken();
    }


}
