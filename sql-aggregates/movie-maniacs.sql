select "c"."firstName", "c"."lastName", sum("amount")
from "customers" as "c"
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by sum("amount") desc

