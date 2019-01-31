# Calculator Kata

Create a simple String calculator with a method int Add(string numbers).

1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”

  - Start with the simplest test case of an empty string and move to 1 and two numbers
  - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
  - Remember to refactor after each passing test
2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas).
  - the following input is ok:  “1\n2,3”  (will equal 6)

4. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

5. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2

Kata modified from http://osherove.com/tdd-kata-1/
