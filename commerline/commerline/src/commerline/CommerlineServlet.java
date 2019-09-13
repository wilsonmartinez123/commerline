package commerline;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.sql.Timestamp;

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

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 * Servlet implementation class CommerlineServlet
 */

@WebServlet("/CommerlineServlet")
public class CommerlineServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	@Resource(mappedName = "java:/MySqlDS")
	private DataSource dataSource;

	private UserTransaction ut;

	@PersistenceContext
	private EntityManager em;

	public CommerlineServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	// tiempo
	// java.util.Date utilDate = new Date();
	// java.sql.Date Timestamp = new java.sql.Date(utilDate.getTime());

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		Connection conn = null;

		ArrayList<String> list = new ArrayList<String>(); // guardar urls de categoria
		ArrayList<String> list2 = new ArrayList<String>(); // guardar urls de ofertas
		ArrayList<String> list3 = new ArrayList<String>(); // guardar urls de nombre de cada producto

		// java.net.UnknownHostException
		System.setProperty("systemProp.https.proxyHost", "localhost");
		System.setProperty("systemProp.https.proxyPort", "8080");

		String url = "https://www.alkomprar.com/ofertas";
		String url2 = "https://www.alkomprar.com";

		Elements elements = Jsoup.connect(url).timeout(60000).get().select(
				".content > .container-fluid > .sections > .sectionofertas > .col-12.boton-ofertas-general > a");// etiquetas
		// ".js-categories-container >
		// .category-menu__sub-navigation--secondary.js-show-sub-category.showed >
		// .js-menu-links > .list-links.no-padding.col-xs-12 > .list-links-scroll > ul >
		// li > .js-single-category > ul > li > a");// etiquetas

		/*
		 * for (int i = 1; i < 13; i++) { // solo las primeras 13 categorias
		 * 
		 * System.out.println("\nCategoria : " + elements.get(i).absUrl("href"));
		 * list.add(elements.get(i).absUrl("href")); // almacena los links de categorias
		 * }
		 */
		if (!elements.isEmpty()) {

			// for (int i = 1; i < 13; i++) {
			for (Element links : elements) {

				String LinkCategorias = links.absUrl("href").replace("/..", ""); // quitar;

				System.out.println("\nCategoria : " + LinkCategorias);
				list.add(LinkCategorias); // almacena los links de categorias
			}
		}

		else

		{ // error en links de categorias

			System.out.println("\nSin Link de categorias : ");
		}

		if (list.size() > 0) {

			for (int j = 0; j < list.size(); j++) {

				Elements link = Jsoup.connect(list.get(j)).timeout(60000).get().select(
						// ".contenedor.blanco > ul > li > a");
						".col-12.boton-ofertas-general > a");

				if (!link.isEmpty()) {

					// for (int i = 1; i < link.size(); i++) {
					String LinkOfertas = link.attr("href").replace("..", ""); // quitar;
					String LinkOfertas2 = url2 + LinkOfertas; // concatenacion
					System.out.println("Ofertas :" + "\t" + LinkOfertas2);
					list2.add(LinkOfertas2);
					// }

				} else { // si no tiene boton click para ver todas las ofertas

					list2.add(list.get(j));
					System.out.println("\nSin boton de ofertas : ");
				}

			}

			LinkedHashSet<String> hashSet = new LinkedHashSet<>(list2);
			ArrayList<String> list2WithoutDuplicates = new ArrayList<>(hashSet); // eliminar elementos duplicados en la
																					// lista
			System.out.println(list2WithoutDuplicates);
			// list.addAll(list2);
			Collections.sort(list2WithoutDuplicates); // ordenar la lista

			////////////////////////////////////////////////////////////////////////////////////////////////////////

			for (int i = 0; i < list2WithoutDuplicates.size(); i++) {
				Document docs = Jsoup.connect(list2WithoutDuplicates.get(i)).timeout(60000).get();// se conecta a cada
																									// uno de los links
																									// de
				// ofertas.

				Elements linkNombre = docs.select("h2.product__information--name > a"); // selecciona e ingresa a cada
																						// articulo

				// Elements category = docs.select(".breadcrumb-section.hidden-xs.hidden-sm > ol
				// > li.active");

				// Elements imagen = docs.select(".product__image__container > img");

				for (Element linksNombre : linkNombre) {

					// Elements imagen = docs.select(".product__image__container > img");
					list3.add(linksNombre.absUrl("href")); // almacena los linkNombre

				}

				System.out.println(list3);

				// }

				for (int x = 0; x < list3.size(); x++) {
					Document doc = Jsoup.connect(list3.get(x)).timeout(120000)
							.userAgent("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0")
							.timeout(60000).get();// se conecta a cada uno de los links nombre del producto

					Elements name = doc.select(".product-name.font-title.font-title--sub-title-2 > h1");
					String namearticulo = name.text();
					namearticulo = namearticulo.replaceAll("\"", ""); // quitar apostrofe

					Elements descripcion = doc.select(".tab-details__content.col-md-6 > ul > li");

					Elements precio = doc.select(
							".price-block.col-xs-12.col-sm-12.col-md-12.col-lg-12.d-inline.no-padding > .row > .col-xs-12 > span.col-xs-12.font-title.font-title--product-price.reset-padding__left.reset-padding__right");

					Elements precioAnterior = doc.select(
							".price-block.col-xs-12.col-sm-12.col-md-12.col-lg-12.d-inline.no-padding > .row > .col-xs-12 > span.col-xs-12.font-title.font-title--sub-title-4.before-price.reset-padding__left reset-padding__right");

					Elements imagen = doc.select(".image-modal-zoom-out-cover > img");

					Elements li = doc.select(".breadcrumb-section.hidden-xs.hidden-sm > ol > li > a");

					Element categoria = li.get(1); // obtener el segundo elemento
					Element subcategoria = li.get(2); // obtener el tercer elemento

					String names = namearticulo;
					String priceold = precioAnterior.text();
					String pricenew = precio.text();
					String image = imagen.attr("src");
					String LinkImagen = (url2 + image); // concatenacion

					String descripciones = descripcion.text();
					String categorias = categoria.text();
					String subcategorias = subcategoria.text();

					System.out.println("Nombre: " + names + " categorias: " + categorias + " subcategorias: "
							+ subcategorias + " descripcion: " + descripciones + " precio: " + pricenew
							+ " precioAnterior: " + priceold + " imagen: " + LinkImagen);

					try {

						// Connection conn = null;
						conn = dataSource.getConnection();

						String search = ("SELECT * FROM productos WHERE nombre_pro LIKE \"" + names + "\"");
						Statement checkIfAlreadyThere = conn.createStatement();
						ResultSet rs = checkIfAlreadyThere.executeQuery(search);
						if (rs.next()) {
							System.out.println("El producto: " + names + " ya esta en la base de datos");

						} else {

							// conectar a la tabla categorias y seleccionar id de acuerdo a la categoria
							/*
							 * String IDcategory =
							 * ("SELECT * FROM categorias WHERE nombre_categoria LIKE '%" + categorias +
							 * "%'");
							 */
							String IDcategory = ("SELECT * FROM categorias WHERE nombre_categoria LIKE \"" + categorias
									+ "\"");

							Statement idcategory = conn.createStatement();
							ResultSet rrs = idcategory.executeQuery(IDcategory);
							if (rrs.next()) {
								// System.out.println("Categoria: " + rrs.getInt(1));
								Integer idcategoria = rrs.getInt(1);

								// Verifica que la subcategoria, no este ya registrada
								String IDsubcategoria = ("SELECT * FROM subcategorias WHERE nombre_subcategoria LIKE \""
										+ subcategorias + "\"");

								Statement idsubcategoria = conn.createStatement();
								ResultSet Subcategoria = idsubcategoria.executeQuery(IDsubcategoria);
								if (Subcategoria.next()) {
									System.out.println("Esta subcategoria ya esta registrada");
									Integer idSubcategoria = Subcategoria.getInt(1);

									// pseudoCode: insert game into database >>>
									String insert = ("INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, id_categoria, id_subcategoria, id_empresa, fecha_registro_pro)"
											+ "VALUES (?,?,?,?,?,?,?,?,?)");
									PreparedStatement preparedStatement = conn.prepareStatement(insert);
									preparedStatement.setString(1, names);
									preparedStatement.setString(2, priceold);
									preparedStatement.setString(3, pricenew);
									preparedStatement.setString(4, LinkImagen);
									preparedStatement.setString(5, descripciones);
									preparedStatement.setInt(6, idcategoria);
									preparedStatement.setInt(7, idSubcategoria);
									preparedStatement.setInt(8, 47);
									preparedStatement.setTimestamp(9, new Timestamp(System.currentTimeMillis()));
									preparedStatement.executeUpdate();
								}

								else {

									// inserta subcategoria del producto
									String sql = ("INSERT INTO subcategorias (nombre_subcategoria, id_categoria)"
											+ "VALUES (?,?)");

									PreparedStatement subcategory = conn.prepareStatement(sql,
											Statement.RETURN_GENERATED_KEYS);
									subcategory.setString(1, subcategorias);
									subcategory.setInt(2, idcategoria);
									subcategory.executeUpdate();
									ResultSet sub = subcategory.getGeneratedKeys();

									if (sub.next()) {
										System.out.println("Subcategoria: " + sub.getInt(1));
										Integer idSubcategoria = sub.getInt(1);

										// pseudoCode: insert game into database >>>
										String insert = ("INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, id_categoria, id_subcategoria, id_empresa, fecha_registro_pro)"
												+ "VALUES (?,?,?,?,?,?,?,?,?)");
										PreparedStatement preparedStatement = conn.prepareStatement(insert);
										preparedStatement.setString(1, names);
										preparedStatement.setString(2, priceold);
										preparedStatement.setString(3, pricenew);
										preparedStatement.setString(4, LinkImagen);
										preparedStatement.setString(5, descripciones);
										preparedStatement.setInt(6, idcategoria);
										preparedStatement.setInt(7, idSubcategoria);
										preparedStatement.setInt(8, 47);
										preparedStatement.setTimestamp(9, new Timestamp(System.currentTimeMillis()));
										preparedStatement.executeUpdate();
										// preparedStatement.close();
									}
								}
							}

							else {

								String sql = ("INSERT INTO categorias (nombre_categoria)" + "VALUES (?)");

								PreparedStatement category = conn.prepareStatement(sql,
										Statement.RETURN_GENERATED_KEYS);
								category.setString(1, categorias);
								category.executeUpdate();
								ResultSet cat = category.getGeneratedKeys();

								if (cat.next()) {
									System.out.println("categoria: " + cat.getInt(1));
									Integer idCategoria = cat.getInt(1);

									// Verifica que la subcategoria, no este ya registrada
									String IDsubcategoria = ("SELECT * FROM subcategorias WHERE nombre_subcategoria LIKE \""
											+ subcategorias + "\"");

									Statement idsubcategoria = conn.createStatement();
									ResultSet Subcategoria = idsubcategoria.executeQuery(IDsubcategoria);
									if (Subcategoria.next()) {
										System.out.println("Esta subcategoria ya esta registrada");
										Integer idSubcategoria = Subcategoria.getInt(1);

										// pseudoCode: insert game into database >>>
										String insert = ("INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, id_categoria, id_subcategoria, id_empresa, fecha_registro_pro)"
												+ "VALUES (?,?,?,?,?,?,?,?,?)");
										PreparedStatement preparedStatement = conn.prepareStatement(insert);
										preparedStatement.setString(1, names);
										preparedStatement.setString(2, priceold);
										preparedStatement.setString(3, pricenew);
										preparedStatement.setString(4, LinkImagen);
										preparedStatement.setString(5, descripciones);
										preparedStatement.setInt(6, idCategoria);
										preparedStatement.setInt(7, idSubcategoria);
										preparedStatement.setInt(8, 47);
										preparedStatement.setTimestamp(9, new Timestamp(System.currentTimeMillis()));
										preparedStatement.executeUpdate();
									}

									else {

										String sql2 = ("INSERT INTO subcategorias (nombre_subcategoria, id_categoria)"
												+ "VALUES (?,?)");

										PreparedStatement subcategories = conn.prepareStatement(sql2,
												Statement.RETURN_GENERATED_KEYS);
										subcategories.setString(1, subcategorias);
										subcategories.setInt(2, idCategoria);
										subcategories.executeUpdate();
										ResultSet sub = subcategories.getGeneratedKeys();

										if (sub.next()) {
											System.out.println("Subcategoria: " + sub.getInt(1));
											Integer idSubcategoria = sub.getInt(1);

											// pseudoCode: insert game into database >>>
											String insert = ("INSERT INTO productos (nombre_pro, precioAnterior_pro, precioNuevo_pro, imagen_pro, descripcion_pro, id_categoria, id_subcategoria, id_empresa, fecha_registro_pro)"
													+ "VALUES (?,?,?,?,?,?,?,?,?)");
											PreparedStatement preparedStatement = conn.prepareStatement(insert);
											preparedStatement.setString(1, names);
											preparedStatement.setString(2, priceold);
											preparedStatement.setString(3, pricenew);
											preparedStatement.setString(4, LinkImagen);
											preparedStatement.setString(5, descripciones);
											preparedStatement.setInt(6, idCategoria);
											preparedStatement.setInt(7, idSubcategoria);
											preparedStatement.setInt(8, 47);
											preparedStatement.setTimestamp(9,
													new Timestamp(System.currentTimeMillis()));
											preparedStatement.executeUpdate();

										}
									}
								}

							}
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

		}

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
