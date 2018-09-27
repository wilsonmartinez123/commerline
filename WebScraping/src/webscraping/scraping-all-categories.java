/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webscraping;

import java.io.IOException;
import java.util.ArrayList;
//import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup6 {

    public static void main(String[] args) throws IOException {
        try {

            ArrayList<String> list = new ArrayList<String>();//guardar urls de paginacion
            ArrayList<String> list2 = new ArrayList<String>();// guardar urls de nombre de cada producto

            //Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares").timeout(30000).get();
            String url = "http://www.alkomprar.com/ofertas";

            String title = "ALKOSTO";
            System.out.println("title : " + title);

            Elements elements = Jsoup.connect(url).timeout(60000).get().select(".nav-container > ul > li.main-nav-first > ul.menu-category > li > a");//etiquetas de categorias

            for (int i = 1; i < 13; i++) { //solo las primeras 13 categorias 

                System.out.println("\nCategoria : " + elements.get(i).absUrl("href"));
                list.add(elements.get(i).absUrl("href")); //almacena los links de categorias
            }

            for (int j = 0; j < 13; j++) {

                //String linkCategoria = Jsoup.connect(list.get(j)).select(".pages > ol > li > a.next.i-next").get(0).attr("href");
                // Document doc = Jsoup.connect(list.get(j)).timeout(60000).get(); //se conecta a cada uno de los links de categorias
                Elements link = Jsoup.connect(list.get(j)).timeout(60000).get().select(".amshopby-page-container > .toolbar-bottom > .toolbar > .sorter > .pages > ol > li > a");
                //Elements link = doc.select(".pages > ol > li > a.next.i-next"); //scraping a todas las categorias
                //Elements link = doc.select(".pages > ol > li > a"); //scraping solo las primeras cinco paginas

                String hj = link.attr("href");

                //System.out.println("\npaginacion : " + hj);
                //list.add(hj);
                // System.out.println(link.size() + "\n" + link.get(0).attr("href"));
                if (!link.isEmpty()) {

                    for (int i = 0; i < link.size(); i++) {

                        System.out.println("paginations :" + "\t" + link.get(i).absUrl("href"));
                        list.add(link.get(i).absUrl("href"));
                    }


                    /* while (Jsoup.connect(hj).timeout(60000).get().select(".pages > ol > li > a.next.i-next").size() > 1) {
                     hj = Jsoup.connect(hj).timeout(60000).get().select(".pages > ol > li > a.next.i-next").get(0).attr("href");
                     System.out.println("paginations :" + "\t" + hj);
                     list.add(hj);

                     }*/
                    //}
                } else { //si no tiene paginacion

                    System.out.println("\nSin Paginación : " + hj);
                }
                //   list2.add(link.attr("href"));

            }

            System.out.println(list);

            for (int i = 0; i < list.size(); i++) {
                Document docs = Jsoup.connect(list.get(i)).timeout(60000).get();//se conecta a cada uno de los links de paginacion 1,2,3... etc

                Elements linkNombre = docs.select(".product-name > a"); //selecciona e ingresa a cada articulo

                for (Element linksNombre : linkNombre) {

                    list2.add(linksNombre.absUrl("href")); //almacena los linkNombre

                }

                for (int x = 0; x < list2.size(); x++) {
                    Document doc = Jsoup.connect(list2.get(x)).timeout(60000).get();// se conecta a cada uno de los links nombre del producto

                    Element name = doc.select(".product-name > h1").first();
                    Elements descripcion = doc.select(".content > p");
                    Element precio = doc.select(".price").first();
                    Elements imagen = doc.select(".amlabel-div > a[id=zoom01]");
                    //Element categoria = doc.select("div.nav-container > ul > li.main-nav-first > ul.menu-category > li > "
                    //  + "ul.menu-content > li.menu-content-column > ul.menu-content-column-container.mobile > li > a").first();

                    Elements categoria = doc.select("meta[name= keywords]");

                    System.out.println("\nNombre : " + name.text());
                    System.out.println("Precio : " + precio.text());
                    System.out.println("Imagen : " + imagen.attr("href"));
                    System.out.println("Descripcion : " + descripcion.text());
                    //System.out.println("Categoria : " + categoria.attr("content").split("")[1]);

                    String[] words = categoria.attr("content").split(" ");   //split our text into individual words, which are separated by spaces
                    if (words.length >= 2) {                //there are at least two words
                        //String secondWord = words[1];
                        System.out.println("Categoria : " + words[0]);
                    }
                }
                // }
            }

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
