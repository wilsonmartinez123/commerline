package commerline;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.transaction.UserTransaction;
import javax.validation.ConstraintViolationException;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * Servlet implementation class CommerlineServlet
 */
// @Entity
@WebServlet("/CommerlineServlet")
public class CommerlineServlet extends HttpServlet {
	// public class SQLIntegrityConstraintViolationException extends
	// SQLNonTransientException {

	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	@Resource(mappedName = "java:/MySqlDS")
	private DataSource dataSource;

	/*
	 * @Id
	 * 
	 * @SequenceGenerator(name = "mySeqGen", sequenceName = "mySeq", initialValue =
	 * 5, allocationSize = 100)
	 * 
	 * @GeneratedValue(generator = "mySeqGen")
	 */

	// private Integer id_pro;
	/*
	 * public void set(DataSource dataSource) {
	 * 
	 * this.dataSource = dataSource;
	 * 
	 * }
	 */

	private UserTransaction ut;

	@PersistenceContext
	private EntityManager em;

	public CommerlineServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/*
	 * public static void main(String[] args) throws SQLException,
	 * ClassNotFoundException{ Connection conn = null; Statement stmt = null;
	 * 
	 * 
	 * Class.forName(JDBC_DRIVER); conn = DriverManager.getConnection(myDatabase,
	 * "root", "3809"); System.out.println("Verbindung erfogreich hergestellt");
	 */

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Connection conn = null;
		/*
		 * try { Class.forName("com.mysql.cj.jdbc.Driver"); String urlMysql =
		 * "jdbc:mysql://localhost:3306/crawler"; Connection conn =
		 * DriverManager.getConnection(urlMysql, "root", "3809"); // TODO Auto-generated
		 * method stub
		 */

		ArrayList<String> list = new ArrayList<String>(); // guardar urls de categoria
		ArrayList<String> list2 = new ArrayList<String>(); // guardar urls de paginacion
		ArrayList<String> list3 = new ArrayList<String>(); // guardar urls de nombre de cada producto

		// get useful information
		/*
		 * Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares")
		 * 
		 * .userAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36"
		 * ) .timeout(30000) //.timeout(30000) //.
		 * userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.38 Safari/537.36"
		 * ) .get();
		 */
		String url = "http://www.alkomprar.com/ofertas";

		Elements elements = Jsoup.connect(url).timeout(60000).get()
				.select(".nav-container > ul > li.main-nav-first > ul.menu-category > li > a");// etiquetas de
																								// categorias

		for (int i = 1; i < 13; i++) { // solo las primeras 13 categorias

			System.out.println("\nCategoria : " + elements.get(i).absUrl("href"));
			list.add(elements.get(i).absUrl("href")); // almacena los links de categorias
		}

		for (int j = 0; j < list.size(); j++) {

			Elements link = Jsoup.connect(list.get(j)).timeout(60000).get()
					.select(".amshopby-page-container > .toolbar-bottom > .toolbar > .sorter > .pages > ol > li > a");

			if (!link.isEmpty()) {

				for (int i = 1; i < link.size(); i++) {

					System.out.println("paginations :" + "\t" + link.get(i).absUrl("href"));
					list2.add(link.get(i).absUrl("href"));
				}

			} else { // si no tiene paginacion

				System.out.println("\nSin Paginación : ");
			}

		}
		list.addAll(list2);
		Collections.sort(list); // ordenar la lista

		for (int i = 0; i < list.size(); i++) {
			Document docs = Jsoup.connect(list.get(i)).timeout(60000).get();// se conecta a cada uno de los links de
																			// paginacion 1,2,3... etc

			Elements linkNombre = docs.select("h2.product-name > a"); // selecciona e ingresa a cada articulo
			Elements category = docs.select(".breadcrumbs > ul > li > strong");

			for (Element linksNombre : linkNombre) {

				list3.add(linksNombre.absUrl("href")); // almacena los linkNombre

			}

			for (int x = 0; x < list3.size(); x++) {
				Document doc = Jsoup.connect(list3.get(x))
						.userAgent("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0")
						.timeout(60000).get();// se conecta a cada uno de los links nombre del producto

				Element name = doc.select(".product-name > h1").first();
				String namearticulo = name.text();
				namearticulo = namearticulo.replaceAll("\"", ""); // quitar apostrofe

				Elements descripcion = doc.select(".short-description.std > div.content");
				Element precio = doc.select(".price").first();
				Elements precioAnterior = doc.select(".price-box > p.old-price > span.price-old");
				Elements imagen = doc.select(".amlabel-div > a[id=zoom01]");

				String names = namearticulo;
				String priceold = precioAnterior.text();
				String pricenew = precio.text();
				String image = imagen.attr("href");
				String descripciones = descripcion.text();
				String categorias = category.text();
				// String establecimiento = almacen.attr("title").split(" ")[0];

				// response.getWriter().append("Agregando productos mediante SCRAPING :)");

				/*
				 * String search = "SELECT * FROM productos WHERE nombre_pro LIKE \"" + names +
				 * "\""; Statement checkIfAlreadyThere = conn.createStatement(); ResultSet rs =
				 * checkIfAlreadyThere.executeQuery(search); if (rs.next()) {
				 * System.out.println("Game already in database"); } else { // insert NEW data
				 * into database >>>> String insert =
				 * "INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, categoria_pro, id_empresa)"
				 * + "VALUES (?,?,?,?,?,?,?)"; PreparedStatement preparedStatement =
				 * conn.prepareStatement(insert);
				 */

			

				try {

					// Connection conn = null;
					conn = dataSource.getConnection();

					String search = ("SELECT * FROM productos WHERE nombre_pro LIKE \"" + names + "\"");
					Statement checkIfAlreadyThere = conn.createStatement();
					ResultSet rs = checkIfAlreadyThere.executeQuery(search);
					if (rs.next()) {
						System.out.println("El producto: " + names + " ya esta en la base de datos");
					
					} else {
						// pseudoCode: insert game into database >>>
						String insert = ("INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, categoria_pro, id_empresa)"
								+ "VALUES (?,?,?,?,?,?,?)");
						PreparedStatement preparedStatement = conn.prepareStatement(insert);
						preparedStatement.setString(1, names);
						preparedStatement.setString(2, priceold);
						preparedStatement.setString(3, pricenew);
						preparedStatement.setString(4, image);
						preparedStatement.setString(5, descripciones);
						preparedStatement.setString(6, categorias);
						preparedStatement.setInt(7, 2);
						preparedStatement.executeUpdate();
						// preparedStatement.close();
					}

				} catch (SQLException e) {

					throw new RuntimeException(e);

				} finally {

					if (conn != null) {

						try {

							conn.close();

						} catch (SQLException e) {
						}

					}

				}

				/*
				 * Productos p = new Productos();
				 * 
				 * try {
				 * 
				 * 
				 * p.setNombre(names); p.setprecioAnterior(priceold); p.setPrecio(pricenew);
				 * p.setImagen(image); p.setDescripcion(descripciones);
				 * p.setCategoria(categorias); p.setEmpresa(2);
				 * 
				 * // }
				 * 
				 * 
				 * try { ut.begin(); } catch (NotSupportedException | SystemException e1) { //
				 * TODO Auto-generated catch block e1.printStackTrace(); } em.persist(p);
				 * 
				 * try { ut.commit(); } catch (SecurityException | IllegalStateException |
				 * RollbackException | HeuristicMixedException | HeuristicRollbackException |
				 * SystemException e) { // TODO Auto-generated catch block e.printStackTrace();
				 * }
				 * 
				 * 
				 * 
				 * } catch (ConstraintViolationException n) {
				 * 
				 * System.out.println ("Constraint name:"+n.getConstraintViolations());
				 * 
				 * }
				 */

			}
		}

		/*
		 * } catch (ClassNotFoundException e1) { // TODO Auto-generated catch block
		 * e1.printStackTrace(); } catch (SQLException e1) { // TODO Auto-generated
		 * catch block e1.printStackTrace(); }
		 */
		// }
		response.getWriter().append("Agregando productos mediante SCRAPING :)");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
