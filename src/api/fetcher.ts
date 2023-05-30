import xml2js from 'xml2js';

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

  const result = (await response.json()).contents;

  if ((((init?.headers as any)?.['Content-Type'] as string) || '').includes('xml')) {
    const parser = new xml2js.Parser({ explicitArray: false });

    return await parser.parseStringPromise(result);
  } else {
    return JSON.parse(result);
  }
}

export default request;
