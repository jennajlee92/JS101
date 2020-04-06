[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

/*
Action method call (map) performed on the outer Array. No side effect. Returns ([1, 3]). Return value is not used but can be assigned to var.
Action callback execution performed on sub-arrays. No side effect. Returns 1, 3 respectively. Used by map for transformation.
Action element access performed on sub-arrays. No side effect. Returns element at index 0 of sub-arrays. Used by console.log.
Action function call console.log performed on element at index 0 of sub-arrays. Outputs a side effect of 1, 3. Returns 1, 3, which is used in map transformation.
*/