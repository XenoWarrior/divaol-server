module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;
var tempID = 1;

handler.admin = function(msg, session, next) {
	next(200, {code: 200});
};

handler.login = function(msg, session, next) {
	next(200, {
		route: 'onEnter', 
		code:200, 
		msg:{
			uid: tempID.toString(), 
			sid: "connector-server-1", 
			username: "TestAccount_"+tempID.toString(), 
			nickname: "TestAccount_"+tempID.toString(), stat:0
		}
	});
	tempID++;
};

handler.logout = function(msg, session, next) {
	next(200, {code: 200});
};

handler.send = function(msg, session, next){
	next(200, {
		route: 'onChat', 
		code: 200, 
		msg:{
			"content":msg["content"]
		}, 
		stat:0
	});
};

handler.onSetMode = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onSetHook = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onSetSong = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onDraw = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onReady = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onUnready = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onJoin = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onLeave = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onCreate = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onClose = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onAllInfo = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onStart = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onReturn = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onKick = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onStart = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onHeartbeat = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onFailure = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onRenew = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onVoidPeriod = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onChance = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.onNewPlayer = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};

handler.getStageList = function(msg, session, next){
	var hostList = [];
	var tempHost = {
		id: "1",
		owner: {
			uid: "1",
			nickname: "TEST HOST",
		},
		capacity: 8,
		createTime: 1476626696,
		stat: 0,
		data: {
			song: [
				{ id: 1, level: 2, mode: 1 },
				{ id: 1, level: 2, mode: 1 }
			]
		},
		count: 1
	};

	// Just send some test hosts
	tempHost["id"] = "1";
	hostList.push(tempHost);
	tempHost["id"] = "2";
	tempHost["capacity"] = 6;
	hostList.push(tempHost);

	next(null, {code: 200, msg: hostList});
};

handler.createStage = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.joinStage = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.leaveStage = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.draw = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.setSong = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.setMode = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.setHook = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.ready = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.start = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.kick = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.back = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.link = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.update = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.over = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.eval = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.failure = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.renew = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.relayIamPlaying = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.relayRelayWantToChange = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.relayRelayWantToPlay = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};
handler.songUI = function(msg, session, next){
	next(200, {code: 200, msg: "ok"});
};