interface HasName {
    name: string,
}

interface HasNickName {
    nickName: string,
}

test('교차 타입', () => {
    const buddy: HasName & HasNickName = {
        name: '홍길동',
        nickName: '길동이'
    };

    expect(buddy).toHaveProperty('name', '홍길동');

});

test('Partial', () => {
    const buddy: Partial<HasName & HasNickName> = {
        name: '홍길동',
    };

    expect(buddy).toHaveProperty('name', '홍길동');
});
