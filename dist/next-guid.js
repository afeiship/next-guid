/*!
 * name: @feizheng/next-guid
 * description: Simple guid for next.
 * url: https://github.com/afeiship/next-guid
 * version: 1.0.0
 * date: 2020-03-27 17:40:43
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var STR_TMPL = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  var STR_X = 'x';

  nx.guid = function() {
    return STR_TMPL.replace(/[xy]/g, function(char) {
      var random = (Math.random() * 16) | 0;
      var value = char == STR_X ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.guid;
  }
})();

//# sourceMappingURL=next-guid.js.map
