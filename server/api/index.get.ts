export default defineEventHandler((event) => {
  const query = getQuery(event);
  return {
    api: "works",
    query,
  };
});