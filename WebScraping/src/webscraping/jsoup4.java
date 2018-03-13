/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webscraping;

/**
 *
 * @author Alejandro polanco espitia
 */
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup4 {

    public static void main(String[] args) {
        try {

            List<String> list = new ArrayList<String>();//guardar urls de paginacion

            Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares").get();

            String title = "ALKOSTO";
            System.out.println("title : " + title);

            Elements elements = doc.select(".pages > ol > li > a");//etiquetas de paginacion
            for (Element element : elements) {
                System.out.println("\nurl : " + element.absUrl("href"));
                list.add(element.absUrl("href")); //guarda en una lista las direcciones de paginacion

                for (int i = 0; i < list.size(); i++) {
                    doc = Jsoup.connect(list.get(i)).get();//se conecta a cada uno de los links de paginacion 1,2,3... etc

                    Elements nombre = doc.select(".product-name a[href][title]");
                    Elements precio = doc.select(".price");
                    Elements imagen = doc.select(".amlabel-div > a > img[src]");

                    for (int j = 0; j < nombre.size(); j++) {

                        System.out.println("\nNombre : " + nombre.get(j).attr("title"));
                        System.out.println("Precio : " + precio.get(j).text());
                        System.out.println("Imagen : " + imagen.get(j).attr("src"));
                    }
                }
            }

            // Pagina web distinta
            System.out.println();
            System.out.println();
            System.out.println("------------------");
            System.out.println();
            System.out.println();

            //pagination
           /* Document page = Jsoup.connect("http://www.alkosto.com/telefonos-celulares")
             .get();

             Elements pagination = page.select(".pages > li > a");
             for (Element e : pagination) {
             String url = e.attr("abs:href");
             Document pages = Jsoup.connect(url).get();

             //System.out.println(e.absUrl("href"));
                
             Elements capital = pages.select("a[href][title]");
             //Elements precios = pages.select("div.col-price");

             for (Element capitales : capital) {

             System.out.println("Nombre : " + capitales.attr("title"));
             //System.out.println("Precio : " + precios.text());
             }

             //scrape the page..
             }*/
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
