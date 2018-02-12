package controllers;

import helpers.SessionHelper;
import models.User;
import play.mvc.Controller;
import services.AuthenticationService;

import javax.inject.Inject;

public abstract class BaseController extends Controller {

    private AuthenticationService authenticationService;

    public BaseController() {

    }

    /**
     * Sets service which will be used to
     * authenticate the logged in user.
     * @param authenticationService
     */
    @Inject
    public void setAuthenticationService(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    /**
     * With the help of SessionHelper and
     * AuthenticationService, gives the current session
     * to the logged in user.
     * @param user
     */
    public void setToken(User user) {
        SessionHelper.setToken(authenticationService.setToken(user));
    }

    /**
     * Method is used to return the current user,
     * used for updating frontend based on which
     * user is logged in.
     * @return User
     */
    public User currentUser() {
        if (SessionHelper.hasToken()) {
            return authenticationService.find(SessionHelper.getToken());
        } else {
            return null;
        }
    }

    /**
     * Used when logging out, to clear
     * the current session.
     */
    public void removeToken() {
        SessionHelper.removeToken();
    }


}
