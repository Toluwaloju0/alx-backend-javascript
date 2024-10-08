export const weakMap = new WeakMap();

let counter = 0;
export function queryAPI(endArg) {
  weakMap.set(endArg, counter += 1);

  if (weakMap.get(endArg) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
