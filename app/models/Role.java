package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "rolename")
    private String roleName;

    public Role() {

    }

    /**
     * Gets id
     *
     * @return value of id
     */
    public UUID getId() {
        return id;
    }

    /**
     * sets id to parameter value
     */
    public void setId(UUID id) {
        this.id = id;
    }

    /**
     * Gets roleName
     *
     * @return value of roleName
     */
    public String getRoleName() {
        return roleName;
    }

    /**
     * sets roleName to parameter value
     */
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

}
