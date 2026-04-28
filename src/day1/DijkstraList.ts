function hasUnvisited(seen: boolean[], dist: number[]): boolean {
  return seen.some((v, i) => !v && dist[i] <= Infinity);
}

function getLowestUnvisited(seen: boolean[], dist: number[]): number {
  let idx = -1;
  let lowestDist = Infinity;

  for (let i = 0; i < dist.length; i++) {
    if (seen[i]) {
      continue;
    }

    if (lowestDist > dist[i]) {
      lowestDist = dist[i];
      idx = i;
    }
  }

  return idx;
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] | null {
  const seen = new Array(arr.length).fill(false);
  const dist = new Array(arr.length).fill(Infinity);
  const prev = new Array(arr.length).fill(-1);

  dist[source] = 0;

  while(hasUnvisited(seen, dist)) {
    const curr = getLowestUnvisited(seen, dist);

    if (curr === -1) {
      break;
    }

    seen[curr] = true;

    for(let i = 0; i < arr[curr].length; i++) {
      const edge = arr[curr][i];

      if (seen[edge.to]) {
        continue;
      }

      const nextDist = dist[curr] + edge.weight;
      if (nextDist < dist[edge.to]) {
        dist[edge.to] = nextDist;
        prev[edge.to] = curr; // set new parent
      }
    }
  }

  const out: number[] = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  if (!out.length) {
    return null;
  }

  out.push(source);
  out.reverse();

  return out;
}