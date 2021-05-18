import faker from 'faker'

test('faker test', () => {
    const randomName = faker.name.findName();
    const gender = faker.name.gender()
    const title = faker.name.title();

    console.log(randomName);
    console.log(gender)
    console.log(title)

    expect(randomName).toBeTruthy();
    expect(gender).toBeTruthy();
    expect(title).toBeTruthy()
})