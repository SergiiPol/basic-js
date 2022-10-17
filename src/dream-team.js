const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let  pre_sorte = [];
  for(var i=0; i< members.length; i++){
      if(typeof members[i] !== "string")
        continue;
      if(typeof members[i] === "string") {
        let membersTrim = members[i].trim();
        pre_sorte.push(membersTrim); 
      };
    };
     pre_sorte.sort();
    let arr2 = [];
  for(let item of pre_sorte){
    let item2 = item.trim().toUpperCase()[0];
    arr2.push(item2);
  }
  return arr2.join("");
};
  
  
  createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);
  createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);  

module.exports = {
  createDreamTeam
};
