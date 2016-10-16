module.exports = function(app) {
	return new Handler(app);
};

var Handler = function(app) {
	this.app = app;
};

var handler = Handler.prototype;

handler.getStageList = function(msg, session, next){
	next(null, {code: 200, 
		msg:
		{
			0:{
				id:1,
				owner:{
					uid:1,
					nickname:"HOST"
				},
				capacity:8,
				createTime:0,
				stat:0,
				data:{
					song:{
						0:{
							id:"1",
							level:"2",
							mode:"1"
						}
					}
				},
				count:"1"
			}
		}
	});
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
