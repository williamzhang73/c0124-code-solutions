select "films"."releaseYear", "genres"."name" from "films" join "filmGenre"
on "films"."filmId"="filmGenre"."filmId" join "genres" on "genres"."genreId"="filmGenre"."genreId" 
where "films"."title"='Boogie Amelie';
