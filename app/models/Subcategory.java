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
    @Id
    @GeneratedValue
    private UUID id;

    @Column(name = "name")
    private String name;

	@ManyToOne
    @JoinColumn(name = "category")
    private Category category;

}
