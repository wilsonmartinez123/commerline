package commerline;

import java.io.Serializable;
import java.lang.Integer;
import java.lang.String;
import java.sql.Timestamp;

//import javax.ejb.TransactionAttribute;
//import javax.ejb.TransactionAttributeType;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: ProductosScraping
 *
 */


@Entity  
@Table(uniqueConstraints=
@UniqueConstraint(columnNames = {"nombre_pro"})) 

public class Productos implements Serializable {
	private static final long serialVersionUID = 1L;

 
	@Id 
	@TableGenerator(name = "ProductosScraping_Gen", initialValue = 1)
	@GeneratedValue(strategy=GenerationType.AUTO)
	//@GeneratedValue(strategy=GenerationType.AUTO)
	//@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)

	private Integer id_pro;
	private String  nombre_pro;
	private String precioAnterior_pro;
	private String precioNuevo_pro;
	private String descripcion_pro;
	private String imagen_pro;
	private String categoria_pro;
	private Integer id_empresa;
	private Timestamp fecha_registro_pro;
	
	 //@Column(name = "nombre_pro", unique = true, nullable = false )
	 //private String nombre_pro;
	 
	// @Column(name = "nombre_pro", unique = true,  nullable = false)
	 
	
	
	
	public Productos() {
		super();
	}   
	public Integer getId() {
		return this.id_pro;
	}

	public void setId(Integer id) {
		this.id_pro = id;
	}   
	public String getNombre() {
		return this.nombre_pro;
	}

	public void setNombre(String nombre) {
		this.nombre_pro = nombre;
	}   
	
	public String getprecioAnterior() {
		return this.precioAnterior_pro;
	}

	public void setprecioAnterior(String precioAnterior) {
		this.precioAnterior_pro = precioAnterior;
	} 
	
	public String getPrecio() {
		return this.precioNuevo_pro;
	}

	public void setPrecio(String precio) {
		this.precioNuevo_pro = precio;
	}   
	public String getDescripcion() {
		return this.descripcion_pro;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion_pro = descripcion;
	}   
	public String getImagen() {
		return this.imagen_pro;
	}

	public void setImagen(String imagen) {
		this.imagen_pro = imagen;
	}
	
	public String getCategoria() {
		return this.categoria_pro;
	}

	public void setCategoria(String categoria) {
		this.categoria_pro = categoria;
	}   
	
	public Integer getEmpresa() {
		return this.id_empresa;
	}

	public void setEmpresa(Integer empresa) {
		this.id_empresa = empresa;
	}  
	

	

   
}
