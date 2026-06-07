function myDebounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    ```
timer = setTimeout(() => {
  fn(...args);
}, delay);
```;
  };
}

function myThrottle(fn, limit) {
  let waiting = false;

  return function (...args) {
    if (waiting) {
      return;
    }

    ```
fn(...args);

waiting = true;

setTimeout(() => {
  waiting = false;
}, limit);
```;
  };
}
