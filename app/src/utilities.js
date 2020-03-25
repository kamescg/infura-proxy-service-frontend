export const convertObjectToURLParameters = obj => {
  var str = Object.keys(obj)
    .map(function(key) {
      return key + '=' + obj[key];
    })
    .join('&');
  return str;
};
