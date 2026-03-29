const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// MODIFIED: helper so services can fall back when backend is absent.
export function hasApiBase() {
  return Boolean(API_BASE_URL);
}

function buildUrl(path, query) {
  const normalizedBase = API_BASE_URL.replace(/\/+$/, '');
  const normalizedPath = String(path || '').replace(/^\/+/, '');
  const url = new URL(`${normalizedBase}/${normalizedPath}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url;
}

async function request(method, path, { query, body, headers } = {}) {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL is not configured');
  }

  const url = buildUrl(path, query);

  const response = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export function getJson(path, options = {}) {
  return request('GET', path, options);
}

export function postJson(path, body, options = {}) {
  return request('POST', path, { ...options, body });
}

export function patchJson(path, body, options = {}) {
  return request('PATCH', path, { ...options, body });
}