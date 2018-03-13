/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webscraping;

import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class WebScraping {
    
    	public static void main(String[] args) throws IOException {

        
        Document doc;
        int maxBodySize = 4092000;//Para paginas webs muy grandes, este valor hay que aumentarlo para que cargue toda la pagina completa
        
            
        doc = Jsoup.connect("https://www.exito.com/browse/Deportes_y_entretenimiento/_/N-2agf?Ntt=todo").maxBodySize(maxBodySize).get();;

        String title = "EXITO";
        System.out.println("title : " + title);
        
        Elements linksNombre = doc.select("h1[class=name]"); //Obtengo las etiquetas html: h1 cuya clase sea 'name', donde se encuentra los nombres de los productos
        Elements linksPrecios = doc.select("div.col-price"); //Obtengo las etiquetas html: div cuya clase sea 'col-price'
        Elements linksImagen = doc.select("img.img-responsive");

        
        for (int i = 0; i < linksNombre.size(); i++) {
            
            
            System.out.println("\nNombre : " + linksNombre.get(i).text());
            System.out.println("Precio : " + linksPrecios.get(i).text());
            System.out.println("Imagen : " + linksImagen.get(i).attr("src"));


        }
        
        	// Pagina web distinta
        System.out.println();
        System.out.println();
        System.out.println("------------------");
        System.out.println();
        System.out.println();
        
    
        doc = Jsoup.connect("https://www.exito.com/browse/Tecnologia-Celulares_y_accesorios/_/N-2b5r").maxBodySize(maxBodySize).get();
        
        title = "UNICO";
        System.out.println("title : " + title);
        
        int maxPages = 200;

        
        for (int j=20; j<maxPages; j+=20){
        

        linksNombre = doc.select("h1.name");
        linksPrecios = doc.select("div.col-price");
        for (int i = 0; i < linksNombre.size(); i++) {

            // get the value from href attribute
            System.out.println("Nombre : " + linksNombre.get(i).text());
            System.out.println("Precio : " + linksPrecios.get(i).text());

        }
        }
     /*  Elements spans = document.select(".contentInfoPriceOrder");
        for (Element span : spans) {
            System.out.println(span.child(0).text());
}
        
        Elements nombre = document.select("h1[class=name]");
        for (Element name : nombre){
            
            System.out.println("Nombre: "+name.text());

        }
      
        
      
        
        
        String text = document.select("div").first().text();
        System.out.println(text);

        Elements links = document.select("a");
        for (Element link : links) {
            System.out.println(link.attr("href"));
        

        
        }
        
*/
    }

}