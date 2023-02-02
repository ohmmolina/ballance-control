export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return {
    api: "works",
    body,
  };
});
