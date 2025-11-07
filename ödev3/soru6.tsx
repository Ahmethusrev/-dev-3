class MemoryCache<K, V> {
  private data = new Map<K, V>();

  set(key: K, value: V): void {
    this.data.set(key, value);
  }

  get(key: K): V | undefined {
    return this.data.get(key);
  }

  clear(): void {
    this.data.clear();
  }
}

const cache = new MemoryCache<string, number>();
cache.set("user:1_score", 100);
console.log(cache.get("user:1_score")); // 100
cache.clear();
console.log(cache.get("user:1_score")); // undefined
// BEKLENEN EKRAN ÇIKTISI:
// 100
// undefined