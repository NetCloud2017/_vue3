import { add } from "../packages/reactivity";
// jest 支持的是 commonjs 规范
it("init", () => {
  expect(add(1, 3)).toBe(4);
});
