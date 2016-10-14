module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.getStageList = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.joinStage = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.kick = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.leaveStage = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
