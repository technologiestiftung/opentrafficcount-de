import { add } from "./lib/stub";

let count = 0;
document.addEventListener("DOMContentLoaded", function() {
  setInterval(() => {
    console.log(count);
    count = add({ a: count, b: 1 });
  }, 1000);

  console.log(
    "Array map",
    [1, 2, 3].map(elem => elem + 1)
  );
  console.log("Object keys", Object.keys({ foo: 1, bah: 2 }));

  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
  p.then(res => {
    console.log("Promise resolved", res);
  });
});
