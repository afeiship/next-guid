import nx from '@jswork/next';

const STR_TMPL = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
const STR_X = 'x';

nx.guid = function () {
  return STR_TMPL.replace(/[xy]/g, function (char) {
    const random = (Math.random() * 16) | 0;
    const value = char == STR_X ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.guid;
}

export default nx.guid;
