select "c"."firstName",
       "c"."lastName"
from "customers" as "c"
join "rentals" using ("customerId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
where "title" = 'Magic Mallrats';


-- customers has customerid wich joins to rentals wich has invintoryid which joins to invintory which has filmid which joins to films
