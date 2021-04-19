test('in, of의 차이', () => {
    let list = [4, 5, 6];

    for (let i in list) {
        console.log(i); // "0", "1", "2"
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }
});

test('in, of의 차이 (value가 object 일때)', () => {
    let list = [
        {
            a: 'A',
        },
        {
            b: 'B',
        },
        {
            c: 'C'
        }
    ];

    for (let i in list) {
        console.log(i); // "0", "1", "2"
    }

    for (let i of list) {
        console.log(i); // "{ a: 'A' }", "{ b: 'B' }", "{ c: 'C' }"
    }
});


test('in, of의 차이2', () => {
    let list = {
        a: 'A',
        b: 'B',
        c: 'C'
    }

    for (let i in list) {
        console.log(i); // "a", "b", "c"
    }

    // of 키워드는 오브젝트에 사용할 수 없다.
    // for (let i of list) {
    //     console.log(i); // "4", "5", "6"
    // }
});