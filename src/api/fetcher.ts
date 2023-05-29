const BASE_URL = 'https://api.allorigins.win/get';

function buildUrl(resource: string) {
  return `${BASE_URL}?url=${encodeURIComponent(resource)}`;
}

async function request<Result, BodyParams = undefined>(
  resource: string,
  init?: Omit<RequestInit, 'body'>,
  data?: BodyParams
): Promise<Result | undefined> {
  const response = await fetch(buildUrl(resource), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }

  return JSON.parse((await response.json()).contents);
}

export default request;
