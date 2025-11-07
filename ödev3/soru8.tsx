function sum(...numbers: number[]/* ??? */): number {
  /* ??? */
  // 'reduce' kullanarak tüm sayıları toplayın
  return numbers.reduce((acc, curr) => acc + curr, 0);

}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// BEKLENEN EKRAN ÇIKTISI:
// 6
// 100