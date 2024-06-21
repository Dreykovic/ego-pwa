const env = {
  appState: import.meta.env.APP_STATE || 'demo',
  baseUrl:
    import.meta.env.EGOTRANSFER_PUBLIC_API_URL ||
    'http://localhost:4000/api/v1',
};
export default env;
