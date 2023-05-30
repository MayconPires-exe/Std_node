export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, parm) => {
    const [key, value] = parm.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}