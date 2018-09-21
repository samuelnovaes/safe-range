'use strict';

function range(start, end, step) {
	if (end === undefined) {
		end = start;
		start = 0;
	}
	if (step === undefined) {
		step = 1;
	}
	if (isNaN(start)) {
		throw new Error('Start argument must be numeric');
	}
	if (isNaN(end)) {
		throw new Error('End argument must be numeric');
	}
	if (isNaN(step)) {
		throw new Error('Step argument must be numeric');
	}
	if (step === 0) {
		throw new Error('Step argument must not be zero');
	}
	var base = Math.pow(10, step.toString().replace(/[\.-]/g, '').length - 1);
	var arr = [];
	start *= base;
	end *= base;
	step *= base;
	if (start < end && step < 0 || start > end && step > 0) {
		return arr;
	}
	for (var i = start; !(start < end && i > end || start > end && i < end); i += step) {
		arr.push(i / base);
	}
	return arr;
}
if (typeof module !== 'undefined') {
	module.exports = range;
}