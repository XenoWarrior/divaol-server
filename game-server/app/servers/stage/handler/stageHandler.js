module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.onSetMode = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onSetHook = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onSetSong = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onDraw = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onReady = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onUnready = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onJoin = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onLeave = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onCreate = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onClose = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onAllInfo = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onStart = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onKick = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};
handler.onReturn = function(msg, session, next){
	next(null, {code: 200, msg: "ok"});
};