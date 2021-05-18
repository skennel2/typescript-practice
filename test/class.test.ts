
/**
 * 가장 일반적인 클래스
 */
class Rect {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

test('객체 테스트 생성1', () => {
    const rect = new Rect(10, 10);
    const area = rect.getArea();
    expect(area).toEqual(100);
})

/**
 * 생성자에 접근제한자 사용
 * 생성자로 넘겨지는 인수에 접근 제한자를 사용하게 되면 해당 클래스에 그 인수의 식별자 이름과 같은 식별자의 프로퍼티가 정의되고 넘겨진 값으로 할당된다. 
 * @link https://hyunseob.github.io/2016/10/17/typescript-class/
 */
class RectConstructorField {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

test('객체 테스트 생성1', () => {
    const rect = new RectConstructorField(10, 10);
    const area = rect.getArea();
    expect(area).toEqual(100);
})

/**
 * readonly 키워드로 읽기전용 필드선언가능
 * @link https://hyunseob.github.io/2016/10/17/typescript-class/
 */
class RectReadonlyField {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // setWidth(width: number) {
    //     this.width = width;
    // }

    getArea(): number {
        return this.width * this.height;
    }
}

test('객체 테스트 생성1', () => {
    const rect = new RectReadonlyField(10, 10);
    const area = rect.getArea();
    expect(area).toEqual(100);
})