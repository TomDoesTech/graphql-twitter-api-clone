import { Length } from "class-validator";
import { Field, ID, InputType, ObjectType } from "type-graphql";
import { User } from "../user/user.dto";

@InputType()
export class CreateMessageInput {
  @Length(6, 280)
  @Field(() => String, { nullable: false })
  body: string;

  userId: string;
}

@ObjectType()
export class Message {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => User, { nullable: false })
  user: User;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => String, { nullable: false })
  body: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;
}
