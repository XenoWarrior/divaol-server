module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.admin = function(msg, session, next) {
	next(null, {code: 200});
};

handler.login = function(msg, session, next) {
	next(null, {code: 200});
};

handler.logout = function(msg, session, next) {
	next(null, {code: 200});
};
