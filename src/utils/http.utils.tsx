export function createURLWithQueryParams(url: string, queryParams: Record<string, any>): string {
    let query = '?';
    let keys = Object.keys(queryParams)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        query = query + key + "=" + queryParams[key] + "&"
    }
    return url + query.slice(0, -1)
}
