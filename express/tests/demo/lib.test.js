const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('absolute', () => {
	it('输入一个正整数会返回该数字', () => {
		const result = lib.absolute(1);
		expect(result).toBe(1);
	});

	it('输入一个负整数会返回该数字的绝对值', () => {
		const result = lib.absolute(-1);
		expect(result).toBe(1);
	});

	it('输入0会返回0', () => {
		const result = lib.absolute(0);
		expect(result).toBe(0);
	});
});

describe('greet', () => {
	it('返回欢迎语', () => {
		const result  =lib.greet('YAN7');
		expect(result).toMatch(/YAN7/);
	});
});

describe('testArray', () => {
	it('返回数组', () => {
		const result = lib.getCurrencies();
		// expect(result).toContain('USD');
		// expect(result).toContain('AUD');
		// expect(result).toContain('EUR');

		// Ideal way
		expect(result).toEqual(expect.arrayContaining(['USD', 'AUD', 'EUR']));
	});
});

describe('testObject', () => {
	it('返回对象', () => {
		const result = lib.getProduct(1);
		expect(result).toMatchObject({id: 1, price: 10});
		expect(result).toHaveProperty('id', 1);
	});
});

describe('testExceptions', () => {
	it('测试异常', () => {
		// exceptions: Null undefined NaN '' 0 false
		const args = [null, undefined, NaN, '', 0, false];
		args.map(a => expect(() => {lib.registerUser(a);}).toThrow());
	});
	it('如果username存在则返回包含username的对象', () => {
		const result = lib.registerUser(1);
		expect(result).toHaveProperty('username', 1);
		expect(result.id).toBeGreaterThan(0);
	});
});

describe('applyDiscount', () => {
	it('是否有折扣', () => {
		db.getCustomerSync =  (customerId) => {
			console.log('Fake reading customer...');
			return { id: customerId, points: 11 };
		};
		const order = {customerId: 1, totalPrice: 10};
		lib.applyDiscount(order);
		expect(order.totalPrice).toBe(9);
	});
});

describe('sendEmail', () => {
	it('是否发送邮件成功', () => {
		db.getCustomerSync = jest.fn().mockReturnValue({email: 'a'});
		mail.send = jest.fn();
		lib.notifyCustomer({customerId: 1, mail: 'a'});
		expect(mail.send).toHaveBeenCalled();
		expect(mail.send).toHaveBeenCalledWith('a', 'Your order was placed successfully.');
		expect(mail.send.mock.calls[0][0]).toBe('a');
		expect(mail.send.mock.calls[0][1]).toMatch(/order/);
	});
});


  