let arr = [1 , 2, 3, -5, -7, -8, -9, 10, 11, 12, 13, 14, 15];

for (let i=0; i<arr.length; i++){
   
    if (arr[i] < 0) {
        continue;
      }
      console.log(arr[i]);  
}