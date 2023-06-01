/* 
1 --- Crea una variable almacén en la que guardes un array con objetos. 
             -    Cada objeto será un departamento de la tienda y tendrás varios
                   productos en cada uno. 
            -     Cada uno de estos productos será un objeto con las siguientes
                   propiedades: nombre, precio y stock. Crea también una variable cesta.*/

let almacen = [
  {
    departamento: "Ropa de mujer",
    producto1: {
      nombre: "Chaqueta",
      precio: 169.95,
      stock: 3,
    },
    producto2: {
      nombre: "Jersey",
      precio: 89.95,
      stock: 9,
    },
    producto3: {
      nombre: "Jeans",
      precio: 29.95,
      stock: 4,
    },
  },
  {
    departamento: "ropaHombre",
    producto1: {
      nombre: "Chaqueta",
      precio: 139.95,
      stock: 1,
    },
    producto2: {
      nombre: "Camiseta",
      precio: 19.95,
      stock: 10,
    },
    producto3: {
      nombre: "Jeans",
      precio: 29.95,
      stock: 8,
    },
  },
  {
    departamento: "ropaNiños",
    producto1: {
      nombre: "Bodies",
      precio: 4.95,
      stock: 3,
    },
    producto2: {
      nombre: "Camiseta",
      precio: 14.95,
      stock: 6,
    },
    producto3: {
      nombre: "Pantalones",
      precio: 19.95,
      stock: 2,
    },
  },
];

module.exports = almacen;
