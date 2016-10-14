module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler._getStage = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.draw = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.getAllInfo = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.kick = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.ready = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.setHook = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.setMode = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.setSong = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.start = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
