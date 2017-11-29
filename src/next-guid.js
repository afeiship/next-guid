(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var STR_TMPL = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  var STR_X = 'x';

  nx.guid = function () {
    return STR_TMPL.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == STR_X
          ? r
          : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.guid;
  }

}());
