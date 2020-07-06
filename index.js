var MongoClient = require('mongodb').MongoClient;
const DB_PASS = process.env.DB_PASS
const DB_USERNAME = process.env.DB_USERNAME
const DB_PORT = process.env.DB_PORT
const DB_HOST = process.env.DB_HOST


// wrapper = connect client -- call the function -- close connection
MongoClient.connect(`mongodb://${DB_USERNAME}:${DB_PASS}@${DB_HOST}:${DB_PORT}`, (err, client) => {
  var db = client.db('test-database');
  let collection = db.collection("test-collection")
  collection.find().toArray(function(err, items) {
    console.log("testing" , items)
  });
  client.close()
});

//load csv.
//dump into db.
//filename -- collection
//items -- rows of csv.
//should be able to list the names of collections(file names)
//should be able to list the items of collections(rows)

