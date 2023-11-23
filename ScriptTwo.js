function findDuplicateNumbers(numbers) {
    var num_s = numbers.sort()
    console.log(num_s);
    var countMap = [];
    var NumberCount = 1;
  
    for(let i = 0; i<num_s.length; i++){
        let curr_num = numbers[i];
        let next_num = numbers[i+1];

        if(curr_num === next_num){
            NumberCount++
        }
        else{
            if(NumberCount % 2 != 0){
                countMap.push(curr_num)
            }
            NumberCount = 1;
        }
    }

  
    
    return countMap;
  }
  
  

  const numbers = [0,1,0,1,0];
  const NumbersOccurs = findDuplicateNumbers(numbers);
  console.log(NumbersOccurs);
  