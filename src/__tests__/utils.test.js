// Your tests here
// src/__tests__/utils.test.js
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  test("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test("is case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  test("throws error for non-alphabetic characters", () => {
    expect(() => isPalindrome("abc123")).toThrow(
      "Input must contain only letters"
    );
  });

  test("throws error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
  });
});
