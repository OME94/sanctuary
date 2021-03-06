'use strict';

const S = require ('./internal/sanctuary');

const Sum = require ('./internal/Sum');
const eq = require ('./internal/eq');


test ('invert', () => {

  eq (typeof S.invert) ('function');
  eq (S.invert.length) (1);
  eq (S.show (S.invert)) ('invert :: Group g => g -> g');

  eq (S.invert (Sum (5))) (Sum (-5));
  eq (S.invert (Sum (-5))) (Sum (5));

});
