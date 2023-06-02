function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  return candies.map((curr) => curr + extraCandies >= max);
};
