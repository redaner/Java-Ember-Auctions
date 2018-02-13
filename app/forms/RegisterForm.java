package forms;

public class RegisterForm {
    /**
     * Gets firstName
     *
     * @return value of firstName
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * sets firstName to parameter value
     */
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    /**
     * Gets lastName
     *
     * @return value of lastName
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * sets lastName to parameter value
     */
    public void setLastName(String lastName) {
        this.lastName = lastName;
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
     * sets email to parameter value
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets phoneNumber
     *
     * @return value of phoneNumber
     */
    public String getPhoneNumber() {
        return phoneNumber;
    }

    /**
     * sets phoneNumber to parameter value
     */
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    /**
     * Gets userType
     *
     * @return value of userType
     */
    public String getUserType() {
        return userType;
    }

    /**
     * sets userType to parameter value
     */
    public void setUserType(String userType) {
        this.userType = userType;
    }

    /**
     * Gets password
     *
     * @return value of password
     */
    public String getPassword() {
        return password;
    }

    /**
     * sets password to parameter value
     */
    public void setPassword(String password) {
        this.password = password;
    }

    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String userType;
    private String password;


    public RegisterForm(String firstName, String lastName, String email, String phoneNumber, String userType, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userType = userType;
        this.password = password;
    }

    public RegisterForm() {

    }

}
