export const transformTitle = title => {
  return title.toLowerCase().replace(/^./, title[0].toUpperCase());
};
