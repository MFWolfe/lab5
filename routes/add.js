var data = require("../data.json");

exports.addFriend = function(req, res) {   
	res.render('add',data);
	var addName = req.query.name;
	var addDescription = req.query.description;
	var newFriend= {
		"name": addName,
		"description": addDescription,
		"imageURL": "http://lorempixel.com/400/400/people"			
	};
	data["friends"].push(newFriend);
}