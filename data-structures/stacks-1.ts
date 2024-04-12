/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  const peekTop = stack.peek();
  return peekTop;
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  const popTop = stack.pop();
  return popTop;
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  const print = stack.print();
  if (print === 'Stack { <empty> }') {
    return true;
  } else {
    return false;
  }
}
