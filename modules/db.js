/*var MongoClient = require('mongodb').MongoClient;



//var { MongoClient } = require('mongodb');
//var createListing = require('./test.js');

 function main (client){
 // var uri = "mongodb+srv://user2:user2@cluster10.hneglt3.mongodb.net/test?retryWrites=true&w=majority";
var uri = 'mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority';
//var uri = 'mongodb://user2:user2@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/sampledbb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

  var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

 //try {
 /*
  await client.connect();
  //await listDatabases(client);
  await createListing(
    client,
      {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1
  }

);
 await listDatabases(client);
} catch (e){
  console.error(e);
} finally {
  await client.close();
}
}

client.connect();
 // listDatabases(client);
  createListing(
    client,
      {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1
  }

);
 // listDatabases(client);
//} catch (e){
 // console.error(e);
//} finally {
   client.close();
//}
}
/*
async function connect (){
  var uri = "mongodb+srv://user2:user2@cluster10.hneglt3.mongodb.net/test?retryWrites=true&w=majority";
var client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
try {
  await client.connect();
  //await listDatabases(client);
  await connectMain(
    client,
      {
    name: "Lovely Loft",
    summary: "A charming loft in Paris",
    bedrooms: 1,
    bathrooms: 1
  }

);
} catch (e){
  console.error(e);
} finally {
  await client.close();
}
}

async function connectMain(client, newListing) {
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = await client.db("sampledb").collection("test").insertOne(newListing);
  //if (callback) callback(newListing);
  console.log(result, newListing);

}

main().catch(console.err);
//main().catch(console.err);



//var {MongoClient} = require('mongodb');
//var main = require('./tutorial.js')
function createListing(client, newListing){
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = client.db("sampledb").collection("rooms").insertOne(newListing);
  console.log(result, newListing);
}

main();
//exports.createListing = createListing;


//---
/*
async function createListing(client, newListing){
  var newListing = {

  name: newListing.name,
  summary: newListing.summary,
  bedrooms: newListing.bedrooms,
  bathrooms: newListing.bathrooms
}

  var result = await client.db("sampledb").collection("test").insertOne(newListing);
  console.log(result, newListing);
}

//-----

function listDatabases(client){
  var databasesList = client.db().admin().listDatabases();
  console.log("Databases: ");
  databasesList.databases.forEach(db, function(req, res, next) { //=> console.log(` - ${db.name}`));

   console.log("db.name");
  });
}

//-----
//exports.createListing = createListing;
//exports.main = main;


/*
async function run() {
  // TODO:
  // Replace the placeholder connection string below with your
  // Altas cluster specifics. Be sure it includes
  // a valid username and password! Note that in a production environment,
  // you do not want to store your password in plain-text here.
  const uri =
    "mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=sampledb1&retryWrites=true&w=majority";

  // The MongoClient is the object that references the connection to our
  // datastore (Atlas, for example)
  const client = new MongoClient(uri);

  // The connect() method does not attempt a connection; instead it instructs
  // the driver to connect using the settings provided when a connection
  // is required.
  await client.connect();

  // Provide the name of the database and collection you want to use.
  // If the database and/or collection do not exist, the driver and Atlas
  // will create them automatically when you first write data.
  const dbName = "myDatabase";
  const collectionName = "recipes";

  // Create references to the database and collection in order to run
  // operations on them.
  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  /*
   *  *** INSERT DOCUMENTS ***
   *
   * You can insert individual documents using collection.insert().
   * In this example, we're going to create four documents and then
   * insert them all in one call with collection.insertMany().
   //* /

  const recipes = [
    {
      name: "elotes",
      ingredients: [
        "corn",
        "mayonnaise",
        "cotija cheese",
        "sour cream",
        "lime",
      ],
      prepTimeInMinutes: 35,
    },
    {
      name: "loco moco",
      ingredients: [
        "ground beef",
        "butter",
        "onion",
        "egg",
        "bread bun",
        "mushrooms",
      ],
      prepTimeInMinutes: 54,
    },
    {
      name: "patatas bravas",
      ingredients: [
        "potato",
        "tomato",
        "olive oil",
        "onion",
        "garlic",
        "paprika",
      ],
      prepTimeInMinutes: 80,
    },
    {
      name: "fried rice",
      ingredients: [
        "rice",
        "soy sauce",
        "egg",
        "onion",
        "pea",
        "carrot",
        "sesame oil",
      ],
      prepTimeInMinutes: 40,
    },
  ];

  try {
    const insertManyResult = await collection.insertMany(recipes);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
  }

  /*
   * *** FIND DOCUMENTS ***
   *
   * Now that we have data in Atlas, we can read it. To retrieve all of
   * the data in a collection, we call Find() with an empty filter.
   * The Builders class is very helpful when building complex
   * filters, and is used here to show its most basic use.
   //* /

  const findQuery = { prepTimeInMinutes: { $lt: 45 } };

  try {
    const cursor = await collection.find(findQuery).sort({ name: 1 });
    await cursor.forEach(recipe => {
      console.log(`${recipe.name} has ${recipe.ingredients.length} ingredients and takes ${recipe.prepTimeInMinutes} minutes to make.`);
    });
    // add a linebreak
    console.log();
  } catch (err) {
    console.error(`Something went wrong trying to find the documents: ${err}\n`);
  }

  // We can also find a single document. Let's find the first document
  // that has the string "potato" in the ingredients list.
  const findOneQuery = { ingredients: "potato" };

  try {
    const findOneResult = await collection.findOne(findOneQuery);
    if (findOneResult === null) {
      console.log("Couldn't find any recipes that contain 'potato' as an ingredient.\n");
    } else {
      console.log(`Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(findOneResult)}\n`);
    }
  } catch (err) {
    console.error(`Something went wrong trying to find one document: ${err}\n`);
  }

  /*
   * *** UPDATE A DOCUMENT ***
   *
   * You can update a single document or multiple documents in a single call.
   *
   * Here we update the PrepTimeInMinutes value on the document we
   * just found.
   //* /
  const updateDoc = { $set: { prepTimeInMinutes: 72 } };

  // The following updateOptions document specifies that we want the *updated*
  // document to be returned. By default, we get the document as it was *before*
  // the update.
  const updateOptions = { returnOriginal: false };

  try {
    const updateResult = await collection.findOneAndUpdate(
      findOneQuery,
      updateDoc,
      updateOptions,
    );
    console.log(`Here is the updated document:\n${JSON.stringify(updateResult.value)}\n`);
  } catch (err) {
    console.error(`Something went wrong trying to update one document: ${err}\n`);
  }

  /*      *** DELETE DOCUMENTS ***
   *
   *      As with other CRUD methods, you can delete a single document
   *      or all documents that match a specified filter. To delete all
   *      of the documents in a collection, pass an empty filter to
   *      the DeleteMany() method. In this example, we'll delete two of
   *      the recipes.
 //  * /


  const deleteQuery = { name: { $in: ["elotes", "fried rice"] } };
  try {
    const deleteResult = await collection.deleteMany(deleteQuery);
    console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
  } catch (err) {
    console.error(`Something went wrong trying to delete documents: ${err}\n`);
  }

  // Make sure to call close() on your client to perform cleanup operations
  await client.close();
}
run().catch(console.dir);


*/


var mongoDB     = require('mongodb').MongoClient;
var db = require('mongodb').Db

//var connection_string = 'mongodb://dstl%5Fmike1%40hotmail%2Ecom:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

//var connection_string = 'mongodb://0.0.0.0:27017/test';
//var connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
var connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00.esmha.mongodb.net:27017,cluster0-shard-00-01.esmha.mongodb.net:27017,cluster0-shard-00-02.esmha.mongodb.net:27017/sampledbb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
//var connection_string = 'mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/sampledbb?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority';


//var connection_string = 'mongodb+srv://dstlmike1:308boonave@cluster0-esmha.mongodb.net/test';
//var connection_string = 'mongodb://0.0.0.0:27017/sampledb';
//var connection_string = 'mongodb://' + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@" + process.env.MONGODB_SERVICE_HOST + ':' + process.env.MONGODB_SERVICE_PORT + '/' + process.env.MONGODB_DATABASE;


//if(process.env.MONGODB_PASSWORD){
  //connection_string = 'mongodb://' + process.env.MONGODB_USER + ":" +
  //process.env.MONGODB_PASSWORD + "@" +
  //process.env.MONGODB_SERVICE_HOST + ':' +
  //process.env.MONGODB_SERVICE_PORT + '/' +
  //process.env.MONGODB_DATABASE;
//}

//var connection_string = mongodb+srv://dstl%5Fmike1%40hotmail%2Ecom:308boonave@cluster0-esmha.mongodb.net/test?retryWrites=true&w=majority

if(process.env.MONGODB_PASSWORD){
 connection_string = process.env.MONGODB_URI;
  // //connection_string = 'mongodb://dstl%5Fmike1%40hotmail%2Ecom:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' + process.env.MONGODB_USER + ":" +
 /// connection_string = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority' + process.env.MONGODB_USER + ":" +
 /// process.env.MONGODB_PASSWORD + "@" +
///  process.env.MONGODB_SERVICE_HOST + ':' +
///  process.env.MONGODB_SERVICE_PORT + '/' +
///  process.env.MONGODB_DATABASE;
}


function connect(callback){
  mongoDB.connect(connection_string, function(err, db) {
    if(err) throw err;
    callback(db);
  });
}

exports.getAllDocuments = function(collection, docs, callback) {
  mongoDB.connect(connection_string, function(err, db) {
    //if(err) throw err;
    var allDocs = db.collection(collection).find().toArray(function(err, docs) {
   // var allDocs = db.collection(collection).find().toArray(docs, function(err, result){
      if (callback)
        callback(docs);
//console.log(docs);
//alldocs;
    //  db.close();
    });
 //  allDocs;
  });
}  
    //callback(docs);
      //db.close();
    //});
  //});
//}

exports.findDocs = function(collection, matchHash, callback) {
  connect(function(db){
    var cursor = db.collection(collection).find(matchHash);
    var ret = [];
    cursor.each(function(err, doc){
      if(doc != null)
        ret.push(doc);
      else
        callback(ret);
    });
  });
}

exports.addDoc = function(collection, doc, callback) {
  connect(function(db){
    var ret = db.collection(collection).insert(doc, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.updateOneDoc = function(collection, findJson, updateJson, callback) {
  connect(function(db){
    var ret = db.collection(collection).updateOne(findJson, updateJson, function(err, result) {
      if (callback)
        callback(result);
      db.close();
    })
  });
}

exports.removeOneDoc = function(collection, findJson, callback) {
  connect(function(db){
    var ret = db.collection(collection).deleteOne(findJson, function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.countDocs = function (collection, callback) {
  connect(function(db){
    var ret = db.collection(collection).count(function(err, result){
      if (callback)
        callback(result);
      db.close();
    });
  });
}

exports.randomDoc = function(collection, callback) {
  connect(function(db){
    var coll = db.collection(collection);
    cursor = coll.find({});

    coll.count(function(err, count){
      var random = Math.floor(Math.random() * count);
      cursor.skip(random);
      cursor.limit(1);
      cursor.each(function(err, doc){
        if(doc != null){
          callback(doc);
          return;
        }
      });
    });
  });
}



