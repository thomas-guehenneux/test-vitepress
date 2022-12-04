
var caches = {}

function setCache(key, data) {
    caches[key] = {data: data, timestamp: Date.now()}
}

function isExpired(cache) {
    return Date.now() - cache.timestamp > 5000
}

export async function get(url) {
    if (caches[url] !== undefined && !isExpired(caches[url])) {
        return Promise.resolve(caches[url].data)
    }

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4 || xhr.status === 0) return

            if (xhr.status >= 200 && xhr.status < 300) {
                const responseData = JSON.parse(xhr.response);
                setCache(url, responseData)
                resolve(responseData);
            } else {
                reject(`request failed with status code ${xhr.status}\nurl: ${url}`);
            }
        }
    });
}
