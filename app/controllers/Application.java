package controllers;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;


public class Application extends Controller {

    public Result index() {
        return ok(Json.toJson("OK"));
    }

}
