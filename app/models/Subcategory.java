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
@Table(name = "subcategories")
public class Subcategory {
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
     * Gets category
     *
     * @return value of category
     */
    public Category getCategory() {
        return category;
    }

    /**
     * sets category to parameter value
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "name")
    private String name;

	@ManyToOne
    @JoinColumn(name = "category")
    private Category category;

}
