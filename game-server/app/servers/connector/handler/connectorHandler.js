module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;
var tempID = 1;

handler.admin = function(msg, session, next) {
	next(null, {code: 200});
};

handler.login = function(msg, session, next) {
	next(null, {route: 'onEnter', code:200, msg:{uid: tempID.toString(), sid: "connector-server-1", username: "TestAccount_"+tempID.toString(), nickname: "TestAccount_"+tempID.toString(), stat:0}});
	tempID++;
};

handler.logout = function(msg, session, next) {
	next(null, {code: 200});
};
