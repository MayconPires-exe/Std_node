// /user:id
export function buildRountPath(path) {
  const rounteParametersRegex = /:([a-zA-Z]+)/g;
  const pathWithParams = path.replaceAll(rounteParametersRegex, '(?<$1>[a-z0-9\-_]+)');
  
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex;
}