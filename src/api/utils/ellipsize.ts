export const ellipsize = (text: string, until: number) => {
  if (text.length < until) {
    return text;
  }

  return `${text.substring(0, until)}...`;
};
