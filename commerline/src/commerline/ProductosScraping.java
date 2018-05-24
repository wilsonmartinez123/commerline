package commerline;

import java.io.Serializable;
import java.lang.Integer;
import java.lang.String;

//import javax.ejb.TransactionAttribute;
//import javax.ejb.TransactionAttributeType;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ProductosScraping
 *
 */
@Entity

public class ProductosScraping implements Serializable {
	private static final long serialVersionUID = 1L;

	   
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	//@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)

	private Integer id;
	private String nombre;
	private String precio;
	private String descripcion;
	private String imagen;
	
	
	public ProductosScraping() {
		super();
	}   
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}   
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}   
	public String getPrecio() {
		return this.precio;
	}

	public void setPrecio(String precio) {
		this.precio = precio;
	}   
	public String getDescripcion() {
		return this.descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}   
	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
   
}
