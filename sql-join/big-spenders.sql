select "payments"."amount","customers"."firstName", "customers"."lastName" from "customers"
join "payments" using ("customerId") order by "payments"."amount" desc limit 10;
