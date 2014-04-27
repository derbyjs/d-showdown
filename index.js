
module.exports = SD;
function SD() {}
SD.prototype.view = __dirname;

SD.prototype.init = function() {
  var model = this.model;
  model.setNull("options", {});
};

SD.prototype.create = function() {
  var model = this.model;
  var that = this;

  var options = model.get("options");
  var converter = this.converter = new Showdown.converter();

  // changes in values inside the array
  model.on("all", "text", function(oldVal, newVal, passed) {
    that.convert();
  })
  this.convert();
};

SD.prototype.convert = function() {
  var text = this.model.get("text");
  var html = this.converter.makeHtml(text);
  this.model.set("html", html);
}
