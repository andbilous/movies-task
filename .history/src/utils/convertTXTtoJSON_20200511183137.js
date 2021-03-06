export const convertTXTtoJSON = data => {
  let res = data.map(item => {
    return item.split("\n\n").map(entry => {
      const obj = {};
      entry.split("\n").forEach(keyValue => {
        const split = keyValue.split(": ");
        const key = split[0];
        const value = split[1];
        obj[key] = key === "Stars" ? value.split(", ") : value;
      });
      return obj;
    });
  });
  console.log()
};
