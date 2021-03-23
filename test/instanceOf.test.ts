// instanceOf
class Person implements HasName, HasNickName {
    name: string;
    nickName: string;

    constructor(name: string, nickName: string) {
        this.name = name;
        this.nickName = nickName;
    }
}

test('instanceOf 생성자로 생성한 인스턴스', () => {
    const buddy: Person = new Person("홍길동2", '길동이2');

    expect(buddy instanceof Person).toEqual(true);
});


test('instanceOf 생성자로 생성한 인스턴스 Partial 레퍼런스', () => {
    const buddy: Partial<Person> = new Person("홍길동2", '길동이2');

    expect(buddy instanceof Person).toEqual(true);
});

test('instanceOf Partial 타입', () => {
    const buddy: Partial<HasName & HasNickName> = {
        name: '홍길동',
        nickName: '길동이'
    };

    expect(buddy instanceof Person).toEqual(false);
});

test('instanceOf & 교차타입', () => {
    const buddy: HasName & HasNickName = {
        name: '홍길동',
        nickName: '길동이'
    };

    expect(buddy instanceof Person).toEqual(false);
});
