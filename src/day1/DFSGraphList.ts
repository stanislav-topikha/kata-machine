function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]):boolean {
  if (curr === needle) {
    path.push(curr);
    return true;
  }

  if (seen[curr]) {
    return false;
  }

  //pre
  path.push(curr);
  seen[curr] = true;
  //recurse
  const list = graph[curr];

  for (const edge of list) {
    if (walk(graph, edge.to, needle, seen, path)) {
      return true;
    }
  }
  //post
  path.pop();
  return false;
}

export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }


  return path;
}