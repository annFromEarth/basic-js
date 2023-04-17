const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
   this.chain.push("( "+String(value)+" )");
   return this;
  },


  removeLink(position) {
    if (isNaN(position) || !Number.isInteger(position) || !this.chain[position-1]) {
      this.chain.length=0;      
      throw new Error("You can't remove incorrect link!");}

   
      this.chain.splice(position-1,1);
      return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const final_chain=this.chain.join("~~");
    this.chain.length=0;
    return final_chain;
  }
};

module.exports = {
  chainMaker
};
