const prodcuts = [{id:1, name: 'a'}, {id:2, name: "B"}, {id:3, name: 'C'} ]

const getAll = () => {
 return  [1,2].map(items => {
    console.log(items)
    prodcuts.find(item => item.id === items.id)
 })
}

console.log(getAll())