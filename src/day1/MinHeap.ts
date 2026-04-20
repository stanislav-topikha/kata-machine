export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
      this.data = [];
      this.length = this.data.length;
    }

    insert(value: number): void {
      this.data[this.length] = value;
      this.heapifyUp(this.length);
      this.length++;
}
    delete(): number {
      if (this.length === 0) {
        return -1;
      }

      const out = this.data[0];
      this.length--;

      if (this.length === 0) {
        this.data = [];
        return out;
      }

      this.data[0] = this.data[this.length];
      this.heapifyDown(0);

      return out;
}

    private heapifyUp(index: number) {
      if (index === 0) {
        return;
      }

      const parent = this.parent(index);

      if (this.data[parent] < this.data[index]) {
        return;
      }

      [this.data[parent], this.data[index]] = [this.data[index], this.data[parent]];
      this.heapifyUp(parent);
    }
    private heapifyDown(index: number) {
      const l = this.leftChild(index);
      const r = this.rightChild(index);

      if (index >= this.length || l >= this.length) {
        return;
      }

      if (this.data[l] > this.data[r] && this.data[index] > this.data[r]) {
        [this.data[index], this.data[r]] = [this.data[r], this.data[index]];
        this.heapifyDown(r);
        return;
      }

      if (this.data[r] > this.data[l] && this.data[index] > this.data[l]) {
        [this.data[index], this.data[l]] = [this.data[l], this.data[index]];
        this.heapifyDown(l);
      }
    }
    private parent(index: number): number {
      return Math.floor((index - 1)/2);
    }
    private leftChild(index: number): number {
      return 2 * index + 1;
    }
    private rightChild(index: number): number {
      return 2 * index + 2;
    }
}