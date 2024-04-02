select "c"."firstName", "c"."lastName",  "p"."amount" as "payment"
from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "payment" desc 
limit 10;
