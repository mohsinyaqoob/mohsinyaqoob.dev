export const getMinimalString = (string: string, wordsLength: number = 10) => {
  const splitted = string.split(" ");
  if (splitted.length > wordsLength) {
    return splitted.slice(0, wordsLength).join(" ");
  } else {
    return splitted.join(" ");
  }
};
