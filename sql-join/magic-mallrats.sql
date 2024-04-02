select "customers"."firstName", "customers"."lastName" from "customers"
join "rentals" on "rentals"."customerId"="customers"."customerId"
join "inventory" on "rentals"."inventoryId"="inventory"."inventoryId"
join "films" on "films"."filmId"="inventory"."inventoryId" 
where "films"."title"='Magic Mallrats';
