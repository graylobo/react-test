import { atom } from "recoil";

export const offset = atom({
  key: 'offset', // unique ID (with respect to other atoms/selectors)
  default: -1, // default value (aka initial value)
});
