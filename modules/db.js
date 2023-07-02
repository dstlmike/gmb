var mongoDB     = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

//var uri = "mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/sampledb?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority";
/*MongoClient.connect(uri, function(err, client) { 
  const collection = client.db("test").collection("devices"); // perform actions on the collection object 
  client.close();
});
*/
//var connection_string = 'mongodb://127.0.0.1:27017/nodejs';
//var uri = 'mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/test?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
 /* connection_string = 'mongodb://' + process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;*/
//  uri = "mongodb://user2:user2@ac-ykrrwag-shard-00-00.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-01.hneglt3.mongodb.net:27017,ac-ykrrwag-shard-00-02.hneglt3.mongodb.net:27017/sampledb?ssl=true&replicaSet=atlas-u69sga-shard-0&authSource=admin&retryWrites=true&w=majority";
uri = 'mongodb://alexbot:308boonave@cluster0-shard-00-00-esmha.mongodb.net:27017,cluster0-shard-00-01-esmha.mongodb.net:27017,cluster0-shard-00-02-esmha.mongodb.net:27017/sampledb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

}

function connect(callback){
  /*
  mongoDB.connect(uri, function(err, db) {
    if(err) throw err;
    callback(db);
  });
  */
  MongoClient.connect(uri, function(err, client) { 
//client = new MongoClient(uri);

  var collection = client.db("sampledb").collection("rooms"); // perform actions on the collection object 
 // client.close();
    callback(client);
    console.log(client);
});
}

exports.getAllDocuments = function(collection, callback) {
  //mongoDB.connect(uri, function(err, db) {
    //if(err) throw err;
 // var client = new MongoClient(uri);
MongoClient.connect(uri, function(err, client) {
 // MongoClient.connect(uri, function(err, client) { 
  var dbo = client.db("sampledb").collection("rooms"); // perform actions on the collection object 
  //client.close();
//});
    dbo.find().forEach(function(err, result) {
      // if(results > 0) { //= [];
      var result = {};
     console.log('1 ');
     console.log(collection);
      console.log('2 ');
      console.log(allDocs);
     console.log('3 ');
     console.log(result);
  // console.log(allDocs);
     // console.log(db);
    ///db.close();
     // callback(result);
      client.close();
     //  };
    });
 });
//  callback(results);
}



/*
exports.getAllDocuments = function(collection, callback) {
  //mongoDB.connect(uri, function(err, db) {
    //if(err) throw err;
  MongoClient.connect(uri, function(err, client) { 
  var collection = client.db("sampledb").collection("test"); // perform actions on the collection object 
  //client.close();
//});
    var allDocs = collection.find().toArray(function(err, results) {
      // if(results > 0) { //= [];
     console.log('1 ');
     console.log(collection);
      console.log('2 ');
      console.log(allDocs);
     console.log('3 ');
     console.log(results);
  // console.log(allDocs);
     // console.log(db);
    ///db.close();
      callback(results);
      client.close();
     //  };
    });
  });
//  callback(results);
}
*/
exports.findDocs = function(collection, matchHash, callback) {
  connect(function(db){
    var cursor = db.collection(collection).find(matchHash);
    var ret = [];
    cursor.each(function(err, doc){
      if(doc != null)
        ret.push(doc);
//  console.log(cursor);
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
