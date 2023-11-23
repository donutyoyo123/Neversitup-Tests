function findDuplicateSmile(countSmileys) {
    var countSmile = 0;
  
    for(let i = 0; i<countSmileys.length; i++){
        var SmileCount_s = countSmileys[i].split("")
        for(let j = 0; j<SmileCount_s.length; j++){
            if(SmileCount_s[j] === ')' || SmileCount_s[j] === 'D'){
                countSmile++
            }
    
        }
    }
 
    
    return countSmile

  }
  
  

  const countSmileys = ([';]', ':[', ';*', ':$', ';-D']);
  const countSmileys_ans = findDuplicateSmile(countSmileys);
  console.log(countSmileys_ans);



 
  