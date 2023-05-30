interface CacheItem {
  item: any;
  expires: number;
}

const DEFAULT_EXPIRATION = 60 * 60 * 24; // 1 day

function add(key: string, value: any, expiration = DEFAULT_EXPIRATION) {
  console.debug('New key added to cache', key);
  localStorage.setItem(key, JSON.stringify({ item: value, expires: new Date().getTime() + expiration }));
}

function get(key: string): CacheItem | undefined {
  const value = localStorage.getItem(key);

  if (value) {
    console.debug('Key retrieved from cache', key);
    return JSON.parse(value);
  }

  return undefined;
}

function contains(key: string) {
  const value = get(key);

  return value && value.expires > new Date().getTime();
}

export function cache<Result = any>(
  key: string,
  callbackFn: () => Promise<Result>,
  expiration = DEFAULT_EXPIRATION
): Promise<Result> {
  if (contains(key)) {
    return Promise.resolve(get(key)?.item as Result);
  }

  const result = callbackFn();

  result.then((result: Result) => {
    add(key, result, expiration);

    return result;
  });

  return result;
}
