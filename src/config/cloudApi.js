export const cloudApi = () => {
  if (process.env.NODE_ENV === 'production') {
    // Backend server URL for production
    return 'https://api.rrlgcoeara.in/.netlify/functions/index';
    // Backend server URL for development
  } else if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
};
