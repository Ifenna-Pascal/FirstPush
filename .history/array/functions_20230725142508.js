const products = [{id:1, name: 'a'}, {id:2, name: "B"}, {id:3, name: 'C'} ]

const getAll = () => {
    return products.filter(item => [1, 2].includes(item.id));
  }

console.log(getAll())