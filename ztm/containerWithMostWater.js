console.log("CONTAINER WITH THE MOST WATER");

/* 
You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines whichtogether witht he x-assix forms a container that would held the greatest amount of water. Return the area of water it would hold.

STEP ONE - VERIFY THE CONSTRAINTS
---------------------------------

- Does the thickness of the lines affect the area?
    - No, assume they take up no space

- Do the left and right sides of the graph count as walls?
    - No, the sides cannot be used to form a container

- Can we pick two values if one value is higer in the middle?
    - Yes, the value in the middle won't affect the container

STEP TWO - WRITE OUT SOME TEST CASES
------------------------------------
   0  1  2  3  4 - indexes
- [7, 1, 2, 3, 9] - 24
    - 7 & 9 shoudl form our contianer, they are the greatest and farther apart
    - there are 4 units between the index of 7 and 9
    - since the formula is length * width = area, we have 7 * 4 = 28

-  [] = 0

- [7] = 0

- [6, 9, 3, 4, 5, 8] - 32
    - if we started with 6, we would have a distance between 6 and 8 of 5 so 6 * 5 = 30
    - if we started with 9, we would have a distance of 4 between 8 and 9, so 8 * 4 = 32
    - our solution is 32

STEP THREE - SOLVE WITHOUT CODE
-------------------------------

area = l * w
suppose we use a and b to denote the two elements in the array
the area would be equal to the minimum value in (a,b) multiplied by the difference in the index of b and the index of a
curMax = min(a,b) * (bIdx - aIdx)
maxArea = 0
*/

function mostWater(arr) {
  let maxArea = 0;
  let curMax;
  if (!arr.length > 1) return maxArea;
  for (let p1 = 0; p1 < arr.length; p1++) {
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      curMax = Math.min(arr[p1], arr[p2]) * (p2 - p1);
      if (curMax > maxArea) {
        maxArea = curMax;
      }
    }
  }

  return maxArea;
}

console.log(mostWater([6, 9, 3, 4, 5, 8]));
console.log(mostWater([7, 1, 2, 3, 9]));
console.log(mostWater([]));
console.log(mostWater([6]));

function mostWater2(arr) {
  let maxArea = 0;
  if (!arr.length > 1) return maxArea;
  for (let p1 = 0; p1 < arr.length; p1++) {
    for (let p2 = p1 + 1; p2 < arr.length; p2++) {
      const height = Math.min(arr[p1], arr[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

console.log(mostWater2([6, 9, 3, 4, 5, 8]));
console.log(mostWater2([7, 1, 2, 3, 9]));
console.log(mostWater2([]));
console.log(mostWater2([6]));
