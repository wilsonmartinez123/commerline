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
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class jsoup2 {

    public static void main(String[] args) throws Exception {
        final Document document
                = Jsoup.connect("https://www.exito.com/browse/Deportes_y_entretenimiento/_/N-2agf?Ntt=todo")
                .timeout(10000)
                .userAgent("Mozilla")
                .cookie("auth", "token")
                .get();
        scrape(document);

        // Move to the next page
        Element page = document.select(".pagination").get(1);
        System.out.println("\nPagina link: " + page.attr("href"));
        Document pageDoc = Jsoup.connect(page.attr("abs:href")).get();
        scrape(pageDoc);
    }

    public static void scrape(Document document) {
        Elements rows = document.select("h1.name");
        // Elements linksNombre = document.select("h1.name"); 

        for (Element row : rows) {
            Elements innerDivs = row.select("div");
           // Elements nombre = row.select("h1.name");
            // Elements precio = row.select("div.col-price");

             //System.out.println("Nombre : " +linksNombre.text());
            String header = innerDivs.get(1).text();
            String content = innerDivs.get(2).text();
          // String nombres = nombre.get(1).text();

                     //for (int i = 0; i <= nombre.size(); i++) {
                 // System.out.println("\nNombre : " +nombre.get(1).text());
            //System.out.println("Precio : " +precio.text());
         //}
            System.out.println("header = " + header + " -> " + content);
            // System.out.println("Nombre = "+nombres);
        }
    }
}
