var moment = require("moment");

function History(obj){
	this.time_format = obj.time_format || "";
	this.max_items = obj.max_items || 10;
}

History.prototype._SUMMARY = {};

History.prototype.get_all = function() {
	return this._SUMMARY;
};

History.prototype.add_entry = function(obj) {
	var time = moment();


	Object.assign(obj, {
		time: time.format(this.time_format)
	});

	this._SUMMARY[time.format(this.time_format)] = obj;

	this.flush();

	return obj;
};

History.prototype.clear = function() {
	this._SUMMARY = {};
};

History.prototype.flush = function() {
	var dates = Object.keys(this._SUMMARY);

	if(dates > this.max_items){
		if(!delete this._SUMMARY[dates[0]]){
			throw new Error("Could not delete the first entry in history");
		}
	}
};

module.exports = History;