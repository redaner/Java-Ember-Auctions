package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "sellerinfo")
public class SellerInfo {
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
     * Gets latitude
     *
     * @return value of latitude
     */
    public Double getLatitude() {
        return latitude;
    }

    /**
     * sets latitude to parameter value
     */
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    /**
     * Gets longitude
     *
     * @return value of longitude
     */
    public Double getLongitude() {
        return longitude;
    }

    /**
     * sets longitude to parameter value
     */
    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    /**
     * Gets userSatisfaction
     *
     * @return value of userSatisfaction
     */
    public Double getUserSatisfaction() {
        return userSatisfaction;
    }

    /**
     * sets userSatisfaction to parameter value
     */
    public void setUserSatisfaction(Double userSatisfaction) {
        this.userSatisfaction = userSatisfaction;
    }

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "usersatisfaction")
    private Double userSatisfaction;


}

