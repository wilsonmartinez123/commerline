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

            ArrayList<String> list = new ArrayList<String>();//guardar urls de paginacion
            ArrayList<String> list2 = new ArrayList<String>();// guardar urls de nombre de cada producto

            Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares").timeout(30000).get();

            String title = "ALKOSTO";
            System.out.println("title : " + title);

            Elements elements = doc.select(".pages > ol > li > a");//etiquetas de paginacion
            for (Element element : elements) {
                System.out.println("\nurl : " + element.absUrl("href"));
                list.add(element.absUrl("href")); //guarda en una lista las direcciones de paginacion

                for (int i = 0; i < list.size(); i++) {
                    doc = Jsoup.connect(list.get(i)).timeout(30000).get();//se conecta a cada uno de los links de paginacion 1,2,3... etc

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

                        System.out.println("\nNombre : " + name.text());
                        System.out.println("Precio : " + precio.text());
                        System.out.println("Imagen : " + imagen.attr("href"));
                        System.out.println("Descripcion : " + descripcion.text());

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

