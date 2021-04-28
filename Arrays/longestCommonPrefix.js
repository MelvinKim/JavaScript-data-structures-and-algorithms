
const longestCommonPrefix = strs => {

   //check if the array is empty
   if(strs.length === 0) {
     return "";
   }

   //make the firstWord as the prefix, then compare as you remove characters
   let comparisonPrefix = strs[0];

   //create a loop to start from teh second index
   for(let i=1; i < strs.length; i++) {
     while(strs[i].indexOf(comparisonPrefix) !== 0) {
       //decrease size , if you can't find a prefix
       comparisonPrefix = comparisonPrefix.substr(0, comparisonPrefix.length - 1);
     }
   }

   return comparisonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));
