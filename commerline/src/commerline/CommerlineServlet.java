package commerline;

import java.io.IOException;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.UserTransaction;

import java.util.ArrayList;
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
	@Resource
	private UserTransaction ut;

	@PersistenceContext
	private EntityManager em;

	public CommerlineServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub

		List<String> list = new ArrayList<String>();// guardar urls de paginacion
		List<String> list2 = new ArrayList<String>();// guardar urls de paginacion

		// get useful information
		Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares")
				
		           .userAgent("Mozilla/5.0")
		           .timeout(30000)
				//.timeout(30000)
				//.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.38 Safari/537.36")
				.get();

		Elements elements = doc.select(".pages > ol > li > a");// etiquetas de paginacion

		for (Element element : elements) {
			// System.out.println("\nurl : " + element.absUrl("href"));
			// processPage(element.absUrl("href"));

			list.add(element.absUrl("href")); // guarda en una lista las direcciones de paginacion

			for (int i = 0; i < list.size(); i++) {
				doc = Jsoup.connect(list.get(i)).get();// se conecta a cada uno de los links de paginacion 1,2,3... etc


                Elements linkNombre = doc.select(".product-name > a");

                for (Element linksNombre : linkNombre) {

                    list2.add(linksNombre.absUrl("href")); //almacena los linkNombre

                }
                for (int x = 0; x < list2.size(); x++) {
                    doc = Jsoup.connect(list2.get(x)).timeout(30000).get();// se conecta a cada uno de los links nombre del producto

                    Element name = doc.select(".product-name > h1").first();
                    Elements descripcion = doc.select(".content > p");
                    Element precio = doc.select(".price").first();
                    Elements imagen = doc.select(".amlabel-div > a[id=zoom01]");

                 
					String names = name.text();
					String prices = precio.text();
					String image = imagen.attr("href");
					String descripciones = descripcion.text();
					
				     
					
					
					ProductosScraping p = new ProductosScraping();
					p.setNombre(names);
					p.setPrecio(prices);
					p.setImagen(image);
					p.setDescripcion(descripciones);

					try {

						ut.begin();
						em.persist(p);
						ut.commit();
					} catch (Exception e) {

						throw new ServletException(e);
					}

					
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
