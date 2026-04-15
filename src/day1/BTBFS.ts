export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  let q = [head];

  while(q.length) {
    let tmpQ = [];

    for (const node of q) {
      if (node.value === needle) {
        return true;
      }

      if (node.left) {
        tmpQ.push(node.left);
      }

      if (node.right) {
        tmpQ.push(node.right);
      }
    }

    q = tmpQ;
    tmpQ = [];
  }

  return false;
}