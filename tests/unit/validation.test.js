test('email validation regex works', () => {
  const valid = 'user@example.com';
  const invalid = 'userexample.com';
  const regex = /^\S+@\S+\.\S+$/;
  expect(regex.test(valid)).toBe(true);
  expect(regex.test(invalid)).toBe(false);
});
