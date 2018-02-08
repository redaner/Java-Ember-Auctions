package helpers;

import static play.mvc.Controller.session;

public class SessionHelper {
    public static void setToken(String id) {
        removeToken();
        session("current", id);
    }

    public static void removeToken() {
        session().remove("current");
    }

    public static String getToken() {
        return session().get("current");
    }

    public static Boolean hasToken() {
        return session().containsKey("current");
    }
}
