
const exercise = require('../exercise');

describe('exerciseTest', () => {
	it('如果input不为数字,则抛出错误', () => {
		const args = ['1', null, undefined, {}];
		args.map(a => expect(() => exercise.FizzBuzz(a) ).toThrow());
	});
	it('如果input同时是3和5的公约数, 则返回FizzBuzz', () => {
		const result = exercise.FizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});
	it('如果input能被3整除,则返回Fizz', () => {
		const result = exercise.FizzBuzz(9);
		expect(result).toBe('Fizz');
	});
	it('如果input能被3整除,则返回Fizz', () => {
		const result = exercise.FizzBuzz(10);
		expect(result).toBe('Buzz');
	});
	it('如果input存在,则返回input', () => {
		const result = exercise.FizzBuzz(1);
		expect(result).toBe(1);
	})
}); 
