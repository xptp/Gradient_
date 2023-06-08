export function validator(age) {
  let count = age % 100;

  if (count >= 10 && count <= 20) {
    return "лет";
  } else {
    count = age % 10;
    if (count === 1) {
      return "год";
    } else if (count >= 2 && count <= 4) {
      return "года";
    } else {
      return "лет";
    }
  }
}
