package forms;

public class LoginForm {

    private String email;
    private String password;

    /**
     * sets email to parameter value
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * sets password to parameter value
     */
    public void setPassword(String password) {
        this.password = password;
    }


    /**
     * Gets email
     *
     * @return value of email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Gets password
     *
     * @return value of password
     */
    public String getPassword() {
        return password;
    }


    public LoginForm(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public LoginForm() {
    }
}
