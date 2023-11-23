function generatePermutations(input) {
    const result = [];

  
    function permute(current, remaining) {

      if (remaining.length === 0) {
        result.push(current);
        return;
      }

    
      for (let i = 0; i < remaining.length; i++) {
        const next = current + remaining[i];
        const remainingChars = remaining.slice(0, i).concat(remaining.slice(i + 1));
        permute(next, remainingChars);
      }
    }
    
    
    permute('', Array.from(input));
    return [...new Set(result)]; 
    } 
  
  const input = 'aabb';
  const permutations = generatePermutations(input);
  console.log('Answer = ' + permutations)
 
