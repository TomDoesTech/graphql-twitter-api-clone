import {
  Arg,
  Authorized,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  PubSubEngine,
  PubSub,
  Subscription,
} from "type-graphql";
import { Context } from "../../utils/createServer";
import { findUserById } from "../user/user.service";
import { CreateMessageInput, Message } from "./message.dto";
import { createMessage, findMessages } from "./message.service";

@Resolver(Message)
class MessageResolver {
  @Authorized()
  @Mutation(() => Message)
  async createMessage(
    @Arg("input") input: CreateMessageInput,
    @Ctx() context: Context,
    @PubSub() pubSub: PubSubEngine
  ) {
    const result = await createMessage({ ...input, userId: context.user?.id! });

    await pubSub.publish("NEW_MESSAGE", result);

    return result;
  }

  @FieldResolver()
  async user(@Root() message: Message) {
    return findUserById(message.userId);
  }

  @Query(() => [Message])
  async messages() {
    return findMessages();
  }

  @Subscription(() => Message, {
    topics: "NEW_MESSAGE",
  })
  newMessage(@Root() message: Message): Message {
    return message;
  }
}

export default MessageResolver;
