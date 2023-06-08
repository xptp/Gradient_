import { validator } from "./validator";
export function listSort(list) {
  let aa = [];
  let bb = [];
  for (let i in list) {
    list[i]["agetype"] = validator(list[i].age);
    // console.log(list[i]);
    if (bb.length === 3) {
      aa.push(bb);
      bb = [];
    }
    bb.push(list[i]);
    if (list.indexOf(list[i]) === list.length - 1) {
      aa.push(bb);
    }
  }
  return aa;
}
