describe('Javabuzz',function() {
  var javabuzz;
  describe('knows when the number is',function() {
    it('is divisble by 3',function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});
