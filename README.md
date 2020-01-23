# 타입스크립트 학습 테스트


## 개발 환경 세팅 스크립트

1. npm 초기화
```bash
npm init
```

2. 의존성 추가
```bash
npm i typescript, @types/node --save-dev
```

3. typescript 초기화
tsconfig.json 생성
```bash
tsc --init
```
4. 테스트 패키지 추가 (jest, ts-jest)
```bash
npm i -D jest
npm i -D ts-jest @types/jest	
```

5. ts-jest config 추가
```bash
npx ts-jest config:init
```

---

### 참고한 자료

[Writing unit tests in TypeScript](https://medium.com/@RupaniChirag/writing-unit-tests-in-typescript-d4719b8a0a40) 
[Jest로 TypeScript 학습테스트 환경 만들기](https://gongzza.github.io/javascript/learning-typescript-with-jest/)
[TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)
[ts-test](https://www.npmjs.com/package/ts-jest)