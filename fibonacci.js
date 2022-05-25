let n1 = 0;
let n2 = 1;
let seq = 23;

for (i = 0; i <= seq; i++) {
  n3 = n1 + n2;

  n1 = n2;
  n2 = n3;

  console.log(n3);
}
