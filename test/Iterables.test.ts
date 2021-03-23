test('in, of의 차이', () => {
    let list = [4, 5, 6];

    for (let i in list) {
        console.log(i); // "0", "1", "2"
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
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

    // for (let i of list) {
    //     console.log(i); // "4", "5", "6"
    // }
});