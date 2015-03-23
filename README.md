# urlshortener

Lyhyt käyttöohje suomeksi

URLIN LYHENNYS
1) lomakkeelle syötetään lyhennettävä url
2) serveri siirtää urlin tietokantaan
3) tietokanta luo automaattisesti triggerillä eri tauluun urlia vastaavan random 5-numeroisen numerosarjan
4) sivulla näytetään käyttäjälle lyhennetty linkki

PITKÄN URLIN PALAUTUS (liikenteen ohjaus)
1) serveri tsekkaa mihin osoitteeseen käyttäjä on hakeutunut
2) serveri etsii tietokannasta vastaavaa shorturlia
3) serveri ohjaa liikenteen vastaavaan shorturliin
