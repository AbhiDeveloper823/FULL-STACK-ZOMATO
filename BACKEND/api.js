const express = require("express"),
	  cors    = require("cors"),
	  mongo   = require("mongodb"),
	  MongoClient = mongo.MongoClient,
	  mongourl = `mongodb+srv://abhi:mongo@abhi@cluster0.ddjzu.mongodb.net/zomato?retryWrites=true&w=majority`,
	  morgan  = require("morgan"),
	  fs      = require("fs"),
	  path    = require("path"),
	  bodyParser = require("body-parser");
	  port    = process.env.PORT || 2000;
	  accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {flags:'a'});
	  app     = express();
let db;

//APP CONFIGURATION
app.use(cors());
app.use(morgan('tiny', {stream: accessLogStream}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());


//API ROUTES ---GET----
app.get("/", (req, res)=>{
	res.send("<a href='/restaurant'>Restauant</a><br/><a href='/mealtype'>MealType</a><br/><a href='/location'>Location</a><br/><a href='/order'>Order</a>");
});

app.get("/restaurant", (req, res)=>{
	var query;
	var mysort;
	if(req.query.city){
		query = {"city_name": req.query.city}
	}
	else if(req.query.sort){
		mysort = {"cost": Number(req.query.sort)};
	}
	else if(req.query.mealtype){
		query = {"type.name": req.query.mealtype}
	}
	else if(req.query.cuisine){
		query = {"Cuisine.name": req.query.cuisine}
	}
	else if(req.query.city && req.query.mealtype){
		query = {"city_name": req.query.city, "type.name": req.query.mealtype}
	}
	else if(req.query.hcost && req.query.lcost){
		query={"cost":{$lt: Number(req.query.hcost), $gt: Number(req.query.lcost)}}
	}
	else{
		query = {};
	}
	db.collection("restaurant").find(query).sort(mysort).toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})
});

app.get("/restaurant/:mealtype", (req, res)=>{
	var query;
	var mysort;
	if(req.query.sort){
		query = {"type.name": req.params.mealtype}
		mysort={"cost": Number(req.query.sort)}
	}
	if(req.query.hcost && req.query.lcost){
		query={"type.name":req.params.mealtype, "cost": {$lt:Number(req.query.hcost), $gt:Number(req.query.lcost)}}
	}
	else if(req.query.cuisine){
		query = {"type.name":req.params.mealtype, "Cuisine.name": req.query.cuisine}
	}
	else if(req.query.city){
		query = {"type.name":req.params.mealtype, "city_name": req.query.city}
	}
	db.collection("restaurant").find(query).sort(mysort).toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})

})

app.get("/restaurant/details/:name", (req, res)=>{
	db.collection("restaurant").find({"name":req.params.name}).toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})
})

app.get("/mealtype", (req, res)=>{
	db.collection("mealtype").find().toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})
})

app.get("/location", (req, res)=>{
	db.collection("location").find().toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})
});

app.get("/order",(req, res)=>{
	db.collection("order").find().toArray((err, data)=>{
		if(err) throw err;
		res.send(data);
	})
});

//----POST APIS-------

app.post("/order", (req, res)=>{
	db.collection("order").insertOne({body: req.body}, (err)=>{
		if(err) throw err;
		res.send("Order Placed!!");
	});
})

app.post("/restaurant", (req, res)=>{
	db.collection("restaurant").insert(req.body, (err)=>{
		if(err) throw err;
		res.send("Restaurant Added!!");
	})
})

app.post("/location", (req, res)=>{
	db.collection("location").insert(req.body, (err)=>{
		if(err) throw err;
		res.send("Location Added!!");
	})
});

app.post("/mealtype", (req, res)=>{
	db.collection("mealtype").insert(req.body, (err)=>{
		if(err) throw err;
		res.send("Location Added!!");
	})
});

//------DELETE API-----
app.delete("/restaurant/:id", (req, res)=>{
	db.collection('restaurant').remove({"_id": Number(req.params.id)}, (err)=>{
		if(err) throw err;
		res.send("Dleted");
	})
})

app.delete("/mealtype/:id",(req, res)=>{
	db.collection('mealtype').remove({"_id": Number(req.params.id)}, (err)=>{
		if(err) throw err;
		res.send("Deleted" + req.params.id);
	})
})

app.delete("/location/:id", (req, res)=>{
	db.collection('location').remove({"_id": Number(req.params.id)}, (err)=>{
		if(err) throw err;
		res.send("Deleted" + req.params.id);
	})
})

app.delete("/order/:id", (req, res)=>{
	db.collection('order').remove({"body.order_id": Number(req.params.id)}, (err)=>{
		if(err) throw err;
		res.send("Deleted!!");
	})
})

//MONGO CONNECTION AND SERVER CONNECTION

MongoClient.connect(mongourl,(err, connection)=>{
	if(err) throw err;
	db = connection.db("zomato");
	app.listen(port, (err)=>{
		if(err) throw err;
		console.log(`Server is running at ${port}`);
	});
});