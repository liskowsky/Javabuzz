describe('Javabuzz',function() {
  var javabuzz;
  beforeEach(function() {
    javabuzz = new Javabuzz();
  });
  describe('knows when a number is', function() {
    it('divisible by 3',function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
  describe('knows when a number is', function() {
    it('divisible by 5',function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });
  describe('knows when a number is NOT', function() {
    it('divisible by 5',function() {
      expect(javabuzz.isDivisibleByFive(7)).toBe(false);
    });
  });
  describe('knows when a number is', function() {
    it('divisible by 15',function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });
  describe('knows when a number is NOT',function() {
    it('divisible by 15',function() {
      expect(javabuzz.isDivisibleByFifteen(13)).toBe(false);
    });
  });
  describe('returns "Java" when the number is', function(){
    it('divisible by 3', function(){
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });
  describe('returns "Buzz" when the nubmer is', function(){
    it('divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });
  describe('returns "JavaBuzz" when the number is', function(){
    it('divisible by 15', function(){
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });
  });
  describe('returns "number" when the number is not', function(){
    it("divisible by 3,5 or 15", function(){
      expect(javabuzz.says(19)).toEqual(19);
    });
  });
});
