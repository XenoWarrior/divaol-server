module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler._getBasicInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getGameCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getGameInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getGamesInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getStageCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getStageInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getStagesInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getUserCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getUserInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler._getUsersInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.basicInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.closeGame = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.closeStage = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.gameCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.gameInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.gamesInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.kick = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.stageCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.stageInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.stagesInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.userCount = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.userInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
handler.usersInfo = function(msg, session, next) {
	next(null, {code: 200, msg: "ok"});
};
