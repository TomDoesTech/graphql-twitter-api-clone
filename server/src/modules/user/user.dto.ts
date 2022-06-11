import { IsEmail, Length } from "class-validator";
import { Field, ID, InputType, ObjectType, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: string;

  @Field(() => ID, { nullable: false })
  username: string;

  @Field(() => ID, { nullable: false })
  email: string;

  password: string;
}

@InputType()
export class RegisterUserInput {
  @Field({
    nullable: false,
  })
  username: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Length(6, 56)
  password: string;
}

@InputType()
export class LoginInput {
  @Field({
    nullable: false,
  })
  usernameOrEmail: string;

  @Field()
  @Length(6, 56)
  password: string;
}

@ObjectType()
export class UserFollowers {
  @Field()
  count: number;

  @Field(() => [User])
  items: User[];
}

@InputType()
export class FollowUserInput {
  @Field()
  username: string;
}
