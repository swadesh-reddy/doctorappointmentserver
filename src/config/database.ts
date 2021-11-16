export default Object.freeze({
    dbProd: "mongodb://swadesh:reddy@cluster0-shard-00-00-ldofq.mongodb.net:27017,cluster0-shard-00-01-ldofq.mongodb.net:27017,cluster0-shard-00-02-ldofq.mongodb.net:27017/Doctor?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    secret: 'yoursecret',
    parse: { useNewUrlParser: true,useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 },
});