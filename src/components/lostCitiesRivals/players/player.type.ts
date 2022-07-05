import { StackI } from "../stacks/stack.type";

export interface PlayerI {
  id: string;
  name: string;
  coins: number;
  stacks: StackI[];
}
