var sorted = require('../../packages/is-sorted')
var fixtures = require('./fixtrues')
var tape = require('tape')
var comparators = {
  descending: function (a, b) { return b - a }
}

fixtures.forEach(function (f) {
  tape('returns ' + f.expected + ' for ' + f.array, function (t) {
    t.plan(1)

    var actual = sorted(f.array, comparators[f.comparator])
    t.equal(actual, f.expected)
  })
})
