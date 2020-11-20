(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.guid', function () {
      console.log(nx.guid());
      console.log(nx.guid());
      console.log(nx.guid());
      console.log(nx.guid());
    });
  });
})();
