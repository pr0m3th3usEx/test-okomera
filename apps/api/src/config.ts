import env from 'env-var';

export const DATABASE_URL = env.get('DATABASE_URL').asUrlString();
export const PORT = env.get('PORT').default(3000).asPortNumber();
