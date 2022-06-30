export const regexUrl = (url: string) => {
  const denied = 'https://developer.android.com/';

  if (url === denied) {
    return false;
  }

  const regex =
    /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  return regex.test(url);
};
