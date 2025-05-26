export function createURLWithQueryParams(url: string, queryParams: Record<string, unknown>): string {
    let query = '?';
    const keys = Object.keys(queryParams)

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        query = query + key + "=" + queryParams[key] + "&"
    }
    return url + query.slice(0, -1)
}
