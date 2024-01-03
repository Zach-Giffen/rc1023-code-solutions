select "co"."name",
      count("c"."name") as "numberOfCities"
from "cities" as "c"
join "countries" as "co" using ("countryId")
group by "co"."countryId";
