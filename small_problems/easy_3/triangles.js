function triangle(n) {
  for (let index = 0; index <= n; index += 1) {
    console.log(`${' '.repeat(n - index)}${'*'.repeat(index)}`);
  }
}

/*
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

triangle(5);
triangle(9);