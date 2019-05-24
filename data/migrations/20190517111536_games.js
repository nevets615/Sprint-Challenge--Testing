exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();
        tbl.string('title', 128).notNullable().unique();
        tbl.string("genre", 255)
        tbl.string('releaseYear',128)
        
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
  };

