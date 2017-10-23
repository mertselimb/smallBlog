var methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    Entry = require("./models/entry"),
    seedDB = require("./seed"),
    app = express();

mongoose.connect("mongodb://admin:310216@ds127065.mlab.com:27065/small-blog", {
    useMongoClient: true
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.get('/', function (req, res) {
    Entry.find({},function(err, allentries){
        if(err){
            console.log(err);
        }else{
            res.render("index" , {entries : allentries});
        };
    });
})
seedDB();
app.listen('port', process.env.PORT || 8080, function () {
    console.log('Example app listening on port 8080!')
})