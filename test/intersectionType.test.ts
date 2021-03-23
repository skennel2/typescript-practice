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

// instanceOf
class Person implements HasName, HasNickName {
    name: string;
    nickName: string;

    constructor(name: string, nickName: string) {
        this.name = name;
        this.nickName = nickName;
    }
}

test('instanceOf', () => {
    const buddy: Partial<HasName & HasNickName> = {
        name: '홍길동',
        nickName: '길동이'
    };
    expect(buddy instanceof Person).toEqual(false);

    const buddy2: HasName & HasNickName = {
        name: '홍길동',
        nickName: '길동이'
    };
    expect(buddy2 instanceof Person).toEqual(false);

    const buddy3: Person = new Person("홍길동2", '길동이2')
    expect(buddy3 instanceof Person).toEqual(true);
});

