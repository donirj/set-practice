const familyList = [
    {name:'doni'},
    {name:'ro'},
    {name:'oscar'},
    {name:'luz'},
  ]

const set = new Set(familyList)
// console.log(set)

set.add({name: 'doni'})
set.add({name: 'javascript'})
console.log(set)