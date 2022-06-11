import prisma from "../../utils/prisma";
import { CreateMessageInput } from "./message.dto";

export function createMessage({ userId, ...input }: CreateMessageInput) {
  return prisma.message.create({
    data: {
      ...input,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function findMessages() {
  return prisma.message.findMany();
}
