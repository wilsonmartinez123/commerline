/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webscraping;

/**
 *
 * @author Alejandro
 */
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup5 {

    public static void main(String[] args) throws JSONException {
        try {

            List<String> list = new ArrayList<String>();//guardar urls de paginacion

            JSONObject jsonParentObject = new JSONObject();
            // JSONArray lista = new JSONArray();

            Document doc = Jsoup.connect("http://www.alkosto.com/telefonos-celulares").get();

            String title = "ALKOSTO";
            System.out.println("title : " + title);

            Elements elements = doc.select(".pages > ol > li > a");//etiquetas de paginacion

            for (Element element : elements) {
                System.out.println("\nurl : " + element.absUrl("href"));
                list.add(element.absUrl("href")); //guarda en una lista las direcciones de paginacion

                for (int i = 0; i < list.size(); i++) {
                    doc = Jsoup.connect(list.get(i)).get();//se conecta a cada uno de los links de paginacion 1,2,3... etc

                    JSONObject jsonObject = new JSONObject();

                    Elements nombre = doc.select(".product-name a[href][title]");
                    Elements precio = doc.select(".price");
                    Elements imagen = doc.select(".amlabel-div > a > img[src]");

                    for (int j = 0; j < nombre.size(); j++) {

                        String name = nombre.get(j).attr("title");
                        String price = precio.get(j).text();
                        String image = imagen.get(j).attr("src");

                        //System.out.println("\nNombre : " + nombre.get(j).attr("title"));
                        //System.out.println("Precio : " + precio.get(j).text());
                        //System.out.println("Imagen : " + imagen.get(j).attr("src"));
                        jsonObject.put("Nombre", name);
                        jsonObject.put("Precio", price);
                        jsonObject.put("Imagen", image);

                      // lista.put(jsonObject);
                        jsonParentObject.put(title, jsonObject);
                        System.out.println(jsonParentObject.toString());

                    }

                }

            }

            // Pagina web distinta
            System.out.println();
            System.out.println();
            System.out.println("------------------");
            System.out.println();
            System.out.println();

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
