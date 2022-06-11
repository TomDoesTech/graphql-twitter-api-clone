import { AuthChecker } from "type-graphql";
import { Context } from "./createServer";

export const bearerAuthChecker: AuthChecker<Context> = ({ context }) => {
  if (context.user) {
    return true;
  }

  return false;
};
