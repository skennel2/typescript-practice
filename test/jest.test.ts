test('jest test for test', ()=> {
    let data = 10;
    expect(data).toEqual(10);
});

test('toHaveLength', ()=> {
    expect('aa').toHaveLength(2);
    expect([2, 3]).toHaveLength(2);
});

test('toHaveProperty', ()=> {
    expect('aa').toHaveProperty('toString');
});

test('toStrictEqual', ()=> {
    expect('22').toStrictEqual('22');

    expect({a: 1}).toStrictEqual({a: 1});
});