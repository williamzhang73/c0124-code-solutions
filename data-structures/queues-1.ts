/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  const peekFront = queue.peek();
  return peekFront;
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  const frontDequeue = queue.dequeue();
  return frontDequeue;
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  const print = queue.print();
  if (print === 'Queue { <empty> }') {
    return true;
  } else {
    return false;
  }
}
