module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.onVoidPeriod = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.onChange = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.onNewPlayer = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};