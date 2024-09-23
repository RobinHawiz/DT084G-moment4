# Labbgrund till Moment 4 i kursen DT084G, Introduktion till programmering i JavaScript

## To-do lista | Uppgiftsbeskrivning
 Denna uppgift går ut på att göra en "Att göra"-lista. Användaren av webbplatsen ska kunna lagra saker som ska göras i en lista som presenteras på webbplatsen.
Det ska gå att lägga till saker i listan från ett textfält. Textfältet ska kollas innan lagring för att se att det innehåller fem tecken eller mer, är texten kortare ska det inte gå att lagra, och användaren ska få ett meddelande om att texten är för kort.
Listan ska lagras med hjälp av Web Storage API, och läsas in på nytt när sidan laddas om.

Den funktionalitet som ska finnas är:

- Möjlighet att lägga till saker att göra till listan. Nya saker i listan ska modifiera DOM och lägga till ett article-element med själva texten som innehåll, enligt följande form: <article>Att göra-text</article>
- Utskriften ska göras till HTML-elementet med id todolist.
- Nya saker ska förutom att skrivas ut till skärmen även lagras med hjälp av web storage.
- Vid lyckad lagring ska text-fältets innehåll raderas.
- Kontroll av inmatning. Det ska inte vara möjligt att lägga till saker i listan som består av textsträng kortare än fem tecken.
- Möjlighet att radera enskilda "att göra"-poster genom att klicka på dessa (det vill säga markera ärendet som utfört). Glöm ej: listan med saker "Att göra" ska lagras om vid radering, så att dessa ej finns kvar efter att sidan laddas om.
- Möjlighet att rensa listan (både på skärmen och i Web storage).

**Uppgiften utförs av: Robin Hawiz (roha2404)**
