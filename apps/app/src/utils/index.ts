/* eslint-disable @typescript-eslint/no-explicit-any */
export function URLBuild(base: string, params: Record<string, any> = {}): string {
  const url = new URL(base);

  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      params[key].forEach((val: string) => {
        if (val) {
          url.searchParams.append(key + '[]', val);
        }
      });
    } else {
      if (params[key]) {
        url.searchParams.append(key, params[key]);
      }
    }
  });

  return url.toString();
}
