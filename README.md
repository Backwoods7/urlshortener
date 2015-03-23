# URL SHORTENER

## Lyhyt käyttöohje suomeksi

TIEDOSTOT:<br>
- Verkkosivu (index.html), johon syötetään pitkä url lyhennettäväksi<br>
- Serveri (app.js), joka ottaa myös yhteyttä tietokantaan<br>
- Tietokanta (database.sql), jossa pitkän ja lyhyen urlin taulut sekä triggeri urlin lyhennykseen<br>
- Funktiotiedosto (client.js), jossa yksi serveriin yhteyttä ottava funktio<br>

URLIN LYHENNYS: <br>
1) lomakkeelle syötetään lyhennettävä url<br>
2) serveri siirtää urlin tietokantaan<br>
3) tietokanta luo automaattisesti triggerillä eri tauluun urlia vastaavan random 5-numeroisen numerosarjan, eli tässä käytettävän short urlin<br>
4) sivulla näytetään käyttäjälle lyhennetty url<br>

PITKÄN URLIN PALAUTUS (liikenteen ohjaus): <br>
1) serveri tsekkaa mihin osoitteeseen käyttäjä on hakeutunut<br>
2) serveri etsii tietokannasta vastaavaa shorturlia<br>
3) serveri ohjaa liikenteen shorturlia vastaavaan oikeaan pitkään urliin<br>
