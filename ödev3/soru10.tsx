class MathHelper {
  static PI: number = 3.14159;

  static calculateCircumference(radius: number): number {
    return 2 * MathHelper.PI * radius;
  }
}

console.log(MathHelper.PI); // 3.14159
console.log(MathHelper.calculateCircumference(10)); // 62.8318