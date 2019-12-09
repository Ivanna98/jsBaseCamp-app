export const textLength = (text) => {
  if (text.length > 200) {
    return (text.slice(0, 198)+' . . .');
  }
  else return text;
};