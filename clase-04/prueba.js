const fs = require('fs');
const {json} = require('stream/consumers');
let id = 1;
const arr = [];
const emptyArr = [];

class Contenedor {
    constructor(product) {
        this.product = product;
    };

    async getAll() {
        try {
            const objs = await fs.promises.readFile(this.product, 'utf-8')
            return  JSON.parse(objs)
        } catch (err) {
            console.log('error');
            return[]
        }
    };

    async save(obj) {
        const data = await this.getAll();
        let newId = id++;
        //this.id = newId;
        const newProduct = {...obj,id:newId}
        data.push(newProduct)
        try {
            await fs.promises.appendFile(this.product, JSON.stringify(data, null, '\t'),'utf-8')
            console.log('Product saved');
        } catch (error) {
            console.log(error);
        }
    };
}

const productos = new Contenedor("products.txt");

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
 

productos.getAll() // Sucede luego que al aplicar este metodo tambien se rompe y me tira error. Se guarda de tal forma que no lo lee.