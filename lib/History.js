var moment = require("moment");

function History(obj){
	this.timeFormat = obj.timeFormat || "";
}

History.prototype._SUMMARY = {};

History.prototype.getAll = function() {
	return this._SUMMARY;
};

History.prototype.addItem = function(obj) {
	var time = moment();


	Object.assign(obj, {
		time: time.format(this.timeFormat)
	});

	this._SUMMARY[time.format(this.timeFormat)] = obj;

	return obj;
};

module.exports = History;