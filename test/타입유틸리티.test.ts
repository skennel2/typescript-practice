interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

test('Readonly<T>', () => {
    const todo: Readonly<Todo> = {
        title: '쇼핑하기',
        description: '내용 없음',
        completed: false
    };

    // todo.completed = true;
});

/**
 * 타입 T의 프로퍼티의 집합 K로 타입을 구성합니다. 이 유틸리티는 타입의 프로퍼티들을 다른 타입에 매핑시키는 데 사용될 수 있습니다.
 */
test('Record<T, K>', () => {
    const todoListByType: Record<'work' | 'private', Todo[]> = {
        work: [
            {
                title: '보고서 쓰기',
                description: '19일 까지',
                completed: false
            }
        ],
        private: [
            {
                title: '쇼핑하기',
                description: '내용 없음',
                completed: false
            },
            {
                title: '청소하기',
                description: '내용 없음',
                completed: false
            }
        ],
    };

    expect(todoListByType.private).toHaveLength(2);
});

/**
 * T에서 프로퍼티 K의 집합을 선택해 타입을 구성합니다.
 */
test('Pick<T, K>', () => {
    const TodoPreview: Pick<Todo, 'title' | 'completed'> = {
        title: '쇼핑하기',
        completed: false
    };

    expect(TodoPreview).toHaveProperty('title')
    expect(TodoPreview).toHaveProperty('completed')
});

/**
 * T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성합니다.
 */
test('Omit<T, K>', () => {
    const TodoPreview: Omit<Todo, 'description'> = {
        title: '쇼핑하기',
        completed: false
    };

    expect(TodoPreview).toHaveProperty('title')
    expect(TodoPreview).toHaveProperty('completed')
});