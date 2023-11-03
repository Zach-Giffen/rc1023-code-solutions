/* exported defaults */

function defaults(target, source) {
  for (const key in source) {
    if (!target(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
