module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;
var tempID = 0;

var userAccounts = {};

handler.admin = function(msg, session, next) {
	next(200, {code: 200});
};

handler.login = function(msg, session, next) {
	var newAccount = {
		ses: session,
		uid: tempID+1,
		name: msg["username"]
	};

	next(200, {
		route: 'onEnter', 
		code: 200, 
		msg:{
			uid: newAccount["uid"].toString(), 
			sid: "connector-server-1", 
			username: newAccount["name"],
			nickname: newAccount["name"],
			stat: 0
		}
	});

	userAccounts[session] = newAccount;
	tempID = userAccounts.length;
};

handler.logout = function(msg, session, next) {
	next(200, {code: 200});
};

handler.send = function(msg, session, next){
	next(200, {
		route: 'onChat', 
		code: 200, 
		msg:{
			"scope": msg["scope"],
			"content": msg["content"]
		}, 
		stat: 0
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
	next(200, {code: 200, flag: true});
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
			nickname: "SystemBot",
		},
		capacity: 8,
		createTime: 1476628986976,
		stat: 0,
		data: {
			song: [
				{ id: 1, level: 2, mode: 0 }
			]
		},
		count: 1
	};

	hostList.push(tempHost);

	next(200, {code: 200, msg: hostList});
};

handler.createStage = function(msg, session, next){
	var userAccount = userAccounts[session];

	var stage = {
		id: "stage_1",
		name: "stage_1",
		owner:{
			uid: userAccount["uid"].toString(),
			sid: "connector-server-1",
			username: userAccount["name"].toString(),
			nickname: userAccount["name"].toString(),
			stat: 0,
			stageId: "stage_1"
		},
		capability: 8,
		stat: 0,
		createTime: 1476628986976,
		slots: [ 
			{
				uid: "1",
				player: {
					uid: userAccount["uid"].toString(),
					sid: "connector-server-1",
					username: userAccount["name"].toString(),
					nickname: userAccount["name"].toString(),
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			},
			{
				uid: "0",
				player: {
					uid: "0",
					sid: "",
					username: "",
					nickname: "",
					stat: -1,
					stageId: ""
				},
				color: -1,
				slot: -1,
				stat: -1
			}
		],
		data:{
			mode:"normal",
			song:[],
			hook:"0"
		},
		count:1
	}

	next(200, {code: 200, msg: stage});
};
handler.joinStage = function(msg, session, next){
	var userAccount = userAccounts[session];
	var stage = {
		id: "stage_1",
		name: "stage_1",
		owner:{
			uid: "0",
			sid: "connector-server-1",
			username: "SystemBot",
			nickname: "SystemBot",
			stat: 0,
			stageId: "stage_1"
		},
		capability: 8,
		stat: 0,
		createTime: 1476628986976,
		slots: [ 
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: "1",
					sid: "connector-server-1",
					username: "SystemBot",
					nickname: "SystemBot",
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			},
			{
				uid: "1",
				player: {
					uid: userAccount["uid"].toString(),
					sid: "connector-server-1",
					username: userAccount["name"].toString(),
					nickname: userAccount["name"].toString(),
					stat: 0,
					stageId: "stage_1"
				},
				color: 0,
				slot: 0,
				stat: 1
			}
		],
		data:{
			mode:"normal",
			song:[
				{ id: 1, level: 2, mode: 0 }
			],
			hook:"0"
		},
		count:1
	}

	next(200, {code: 200, msg: stage});
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
	var userAccount = userAccounts[session];
	var startPacket = {
		id:"game_1",
		name:"stage_1",
		host:{
			uid: userAccount["uid"].toString(),
			sid: "connector-server-1",
			username: userAccount["name"].toString(),
			nickname: userAccount["name"].toString(),
			stat: 0,
			stageId: "stage_1"
		},
		song:{
			id: 49,
			level: 0,
			mode: 0
		},
		mode: 0,
		hook: "0",
		players:[{
			info:{
				uid: userAccount["uid"].toString(),
				sid: "connector-server-1",
				username: userAccount["name"].toString(),
				nickname: userAccount["name"].toString(),
				stat: 0,
				stageId: "stage_1"
			},
			color:0,
			index:0,
			teamId:0,
			stat:2,
			score:0,
			combo:0,
			hp:0.5,
			idInTeam:0,
			position:0,
			complete:false,
			eval:[0,0,0,0,0],
			extra:{}
		}],
		teamCnt:1
	};

	push(200, {code:200, flag: true, msg: startPacket});
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