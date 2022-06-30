/* const fs = require('fs');
const express = require('express')
const app = express()
const {json} = require('stream/consumers');
let id = 0;
const arr = [];
const emptyArr = [];

class Contenedor {
    constructor(product) {
        this.product = product;
    };

    async getAll() {
        try {
            const productsData = await fs.promises.readFile(this.product, 'utf-8')
            const totalProducts = await JSON.parse(productsData)
            return console.log(totalProducts);
        } catch (err) {
            console.log('error');
        }
    };

    async save(obj) {
        let newId = id++;
        this.id = newId;
        const newProduct = {id,...obj}
        arr.push(newProduct)
        try {
            await fs.promises.writeFile(this.product, JSON.stringify(arr, null, '\t'))
            console.log('Product saved');
        } catch (error) {
            console.log(error);
        }
    };

    //Intenté de varias formas traer mediante el método getAll() el file pero no lo logré, por eso opté por ponerlo de esta manera nuevamente. Inclusive intente como  me lo indicaste. Si me querés pasar como sería el codigo es bienvenido.

    async getById(id) {
        try {
            const productData = await fs.promises.readFile('products.txt', 'utf-8') //getAll()??
            let checkData = JSON.parse(productData)
            console.log(checkData);
            const productDetail = checkData.find(p => p.id == id);
            console.log(productDetail);
        } catch (err) {
            console.log(null);
        }
    };

    //Lo mismo que antes, no me funciona trayendo el metodo getAll, no le encuentro la vuelta para hacerlo de esa forma y que funcione.

    async deleteById(id) {
        const productInfo = await fs.promises.readFile('products.txt', 'utf-8')
        let itemsData = JSON.parse(productInfo)
        const newArr = itemsData.filter(p => p.id !== id)
        console.log(newArr);
        try {
            await fs.promises.writeFile('products.txt', JSON.stringify(newArr, null, '\t'))
        } catch (err) {
            console.log('error');
        }
    };

    async deleteAll() {
        try {
            await fs.promises.writeFile('products.txt', JSON.stringify([], null, '\t'))
            console.log("Deleted");
        } catch (err) {
            console.log('error');
        }
    };
};

const productos = new Contenedor("products.txt"); */

//Prueba de métodos
/* 
 productos.save(
    {
        "title": "ESTEREO",
        "price": 30000,
        "thumbnail": "stereo.jpg"
    });

productos.save(
    {
        "title": "TABLET",
        "price": 40000,
        "thumbnail": "tablet.jpg"
    });

productos.save(
    {
        "title": "ESTEREO",
        "price": 30000,
        "thumbnail": "stereo.jpg"
    }); 
 */
//productos.getAll() 
//productos.getById(3)
//productos.deleteById(2)
//productos.deleteAll();

/* const products = productos.getAll()
    const productoRandom = products [Math.floor(Math.random() *products.length)];
    console.log(productoRandom);

    const products = ["juan","marcos","elisa","estela","miguel"]//productos.getAll()
    const productoRandom = products [Math.floor(Math.random() *products.length)];
    console.log(productoRandom); */