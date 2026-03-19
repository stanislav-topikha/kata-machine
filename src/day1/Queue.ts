type QNode<T> = {
  value: T,
  next?: QNode<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
      this.head = this.tail = undefined;
      this.length = 0;
    }

    enqueue(item: T): void { // push
      this.length++;

      const newNode = {value: item} as QNode<T>;

      if (!this.tail) {
        this.tail = this.head = newNode;
        return;
      }

      this.tail.next = newNode;
      this.tail = newNode;
    }
    deque(): T | undefined { // pop
      if (!this.head) {
        return;
      }

      this.length--;

      const head = this.head;
      this.head = this.head.next;

      if (!this.head) {
        this.tail = undefined;
      }

      return head.value;
    }
    peek(): T | undefined {
      return this.head?.value;
    }
}
