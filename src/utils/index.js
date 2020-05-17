export const convertTXTtoJSON = data => {
  return data.split("\r\n\r\n").map(entry => {
    const obj = {};
    entry.split("\n").forEach(keyValue => {
      const split = keyValue.split(": ");
      const key = split[0];
      const value = split[1];
      obj[key] = key === "Stars" ? value.split(" , ") : value;
    });
    return obj;
  });
};

export const generateId = () => Math.floor(Math.random() * 100000);

export const transformTitle = title => {
  return title.toLowerCase().replace(/^./, title[0].toUpperCase());
};
