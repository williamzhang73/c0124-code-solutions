select "countries"."name" as "countryName",
count(*) as "citiesCount" from "countries"
join "cities" using ("countryId")
group by "countries"."countryId"
