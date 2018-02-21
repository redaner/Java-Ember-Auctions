package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.UUID;

@Entity
@Table(name = "reviews")
public class Review {
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
     * Gets product
     *
     * @return value of product
     */
    public Product getProduct() {
        return product;
    }

    /**
     * sets product to parameter value
     */
    public void setProduct(Product product) {
        this.product = product;
    }

    /**
     * Gets comment
     *
     * @return value of comment
     */
    public String getComment() {
        return comment;
    }

    /**
     * sets comment to parameter value
     */
    public void setComment(String comment) {
        this.comment = comment;
    }

    @Id
    @GeneratedValue
    private UUID id;

	@ManyToOne
    @JoinColumn(name = "product")
    private Product product;
	
	@Column(name = "comment")
	private String comment;

}
