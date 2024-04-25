// middleware.ts
import { Middleware } from "@reduxjs/toolkit";

const myMiddleware: Middleware<{}> = (store) => (next) => (action) => {
  // Your middleware logic here
  return next(action);
};

export const middleware = [myMiddleware];
