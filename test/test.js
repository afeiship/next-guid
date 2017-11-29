var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-guid');

describe('next/guid', function () {

  it('nx.guid  not equal', function () {

    var guid1 = nx.guid();
    var guid2 = nx.guid();
    var guid3 = nx.guid();


    assert.notEqual(guid1,guid2);
    assert.notEqual(guid2,guid3);
    assert.notEqual(guid3,guid1);

  });

});
