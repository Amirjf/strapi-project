import delve from 'dlv';

// This function simply return the slug and the locale of the request with default values
export function getLocalizedParams(query) {
  const slug = delve(query, 'slug');

  return { slug: slug || '' };
}
