const { greater, add } = require('./math');


describe('Greater Function', () => {
  test(" should be greater", () => {
    const result = greater(3, 1);
    // console.log(result);
    if (result !== 1) {
      throw new Error()
    }
  });

  test(" should be smaller", () => {
    const result = greater(0, 1);
    // console.log(result);
    if (result !== -1) {
      throw new Error()
    }
  });

  test(" should be equal", () => {
    const result = greater(-2, -2);
    // console.log(result);
    if (result !== 0) {
      throw new Error()
    }
  })
});



test('greater', () => {
  let inputs = [
    {
      a: 3,
      b: -3,
      expectedRes: 1
    },
    {
      a: -3,
      b: -2,
      expectedRes: -1

    },
    {
      a: 0,
      b: 0,
      expectedRes: 0
    }
  ];

  inputs.forEach(({ a, b, expectedRes }) => {
    const res = greater(a, b)
    expect(res).toBe(expectedRes);
  })

})

test("add 2 numbers", (done) => {
  add(3, 2).then(sum => {
    expect(sum).toBe(5);
    done();
  });
})

test("add 2 numbers async/await", async () => {
  const sum = await add(3, 2);
  expect(sum).toBe(5);
})

