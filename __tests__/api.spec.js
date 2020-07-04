const nx = require('@feizheng/next-js-core2');
require('../src/next-guid');

describe('api.basic test', () => {
  test('nx.guid', function() {
    console.log(nx.guid());
    console.log(nx.guid());
    console.log(nx.guid());
    console.log(nx.guid());
  });
});
