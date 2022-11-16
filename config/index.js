const dev = process.env.NODE.ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://yoururl.com';
