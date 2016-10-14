module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.onStart = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.onHeartbeat = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.onFailure = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.onRenew = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler._getGame = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.back = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.currentInfo = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.eval = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.failure = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.leave = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.link = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.over = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.relayIamPlaying = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.relayRelayWantToChange = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.relayRelayWantToPlay = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.renew = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};

handler.update = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};














