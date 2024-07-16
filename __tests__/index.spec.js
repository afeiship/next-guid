require('../src');

describe('api.basic test', () => {
  test('Generate guid str', function () {
    const res1 = nx.guid();
    const res2 = nx.guid();
    expect(res1.length === res2.length).toBe(true);
  });
});
