function compose(f, g, h) {
  return function (x) {
    return f(g(h(x)));
  };
}
