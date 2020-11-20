(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var STR_TMPL = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  var STR_X = 'x';

  nx.guid = function () {
    return STR_TMPL.replace(/[xy]/g, function (char) {
      var random = (Math.random() * 16) | 0;
      var value = char == STR_X ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.guid;
  }
})();
