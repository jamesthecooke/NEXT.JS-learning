import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  // * zero or more paramas on the route
  //   + one or more
  // ? zero or one
  matcher: ["/users/:id*"],
};
