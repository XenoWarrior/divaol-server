module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.send = function(msg, session, next){
	console.log("------------------ MESSAGE ------------------");
	console.log(msg.body.content);
	console.log("------------------ MESSAGE ------------------");
	next(null, {code: 200, msg: "ok"});
};