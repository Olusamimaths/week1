pragma circom 2.0.0;

include "../../node_modules/circomlib/circuits/comparators.circom";

template RangeProof(n) {
    assert(n <= 252);
    signal input in; // this is the number to be proved inside the range
    signal input range[2]; // the two elements should be the range, i.e. [lower bound, upper bound]
    signal output out;

    component low = LessEqThan(n);
    component high = GreaterEqThan(n);

    // [assignment] insert your code here
    // the input has to be greater than or equal to the lower bound
    high.in[0] <== in;
    high.in[1] <== range[0];
    high.out === 1;

    out <-- high.out;

    // the input has to be lower than or equal to the upper bound
    low.in[0] <== in;
    low.in[1] <== range[1];
    low.out === 1;

    out <== (high.out + low.out) * 1/2;
    out === 1;
}