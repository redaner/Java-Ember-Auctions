package models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "products")
public class Product {
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
     * Gets name
     *
     * @return value of name
     */
    public String getName() {
        return name;
    }

    /**
     * sets name to parameter value
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets description
     *
     * @return value of description
     */
    public String getDescription() {
        return description;
    }

    /**
     * sets description to parameter value
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Gets price
     *
     * @return value of price
     */
    public Double getPrice() {
        return price;
    }

    /**
     * sets price to parameter value
     */
    public void setPrice(Double price) {
        this.price = price;
    }

    /**
     * Gets rating
     *
     * @return value of rating
     */
    public Double getRating() {
        return rating;
    }

    /**
     * sets rating to parameter value
     */
    public void setRating(Double rating) {
        this.rating = rating;
    }

    /**
     * Gets category
     *
     * @return value of category
     */
    public Subcategory getCategory() {
        return category;
    }

    /**
     * sets category to parameter value
     */
    public void setCategory(Subcategory category) {
        this.category = category;
    }

    /**
     * Gets imageLink
     *
     * @return value of imageLink
     */
    public String getImageLink() {
        return imageLink;
    }

    /**
     * sets imageLink to parameter value
     */
    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "rating")
    private Double rating;

	@ManyToOne
    @JoinColumn(name = "category")
    private Subcategory category;
	
	@Column(name = "imagelink")
	private String imageLink;
}
