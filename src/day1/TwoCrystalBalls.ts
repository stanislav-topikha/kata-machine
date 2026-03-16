export default function two_crystal_balls(breaks: boolean[]): number {
  const step = Math.floor(breaks.length ** 0.5);

  for (
    let i = step;
    i < breaks.length;
    i += step
  ) {
    if (breaks[i]) {
      i -= step;
      while(!breaks[i]) {
        i++;
      }

      return i;
    }
  }

  return -1;
}