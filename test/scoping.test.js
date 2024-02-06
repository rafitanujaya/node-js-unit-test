beforeAll(() => console.info("Before all"));
afterAll(() => console.info("After all"));
beforeEach(() => console.info("Before each"));
afterEach(() => console.info("After each"));
test("test outer 1", () => console.info("test outer 1"));
test("test outer 2", () => console.info("test outer 2"));

describe("inner scope", () => {
  beforeAll(() => console.info("Before all 1"));
  afterAll(() => console.info("After all 1"));
  beforeEach(() => console.info("Before each 1"));
  afterEach(() => console.info("After each 1"));
  test("test inner 1", () => console.info("test inner 1"));
  test("test inner 2", () => console.info("test inner 2"));
});
