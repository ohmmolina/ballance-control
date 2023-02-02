import { PrismaClient } from "@prisma/client";
const usersDB = new PrismaClient().users;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let limit = 10;
  let offset = 0;
  if (query.limit) {
    limit = parseInt(query.limit.toString());
  }
  if (query.offset) {
    offset = parseInt(query.offset.toString());
  }
  try {
    const users = await usersDB.findMany({
      take: limit,
      skip: offset,
    });
    if (users.length > 0){
      return {
        users
      }
    }
    return {
      users: [],
      message: 'No users found'
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
});
