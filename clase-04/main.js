const {promises:fs} = require('fs');

class Contenedor {
    constructor(product) {
        this.product = product;
    };

    async getAll() {
        try {
            const objs = await fs.readFile(this.product, 'utf-8')
            console.log(objs); 
            return JSON.parse(objs);
            
        } catch (err) {
            console.log('error');
            return[]
        }
    };

    async save(obj) {
        const data = await this.getAll();
        let newId
        if (data.length == 0) 
        {newId = 1} else {
            newId = data[data.length -1].id+1
        }
        const newProduct = {...obj,id:newId}
        data.push(newProduct)
        try {
            await fs.writeFile(this.product, JSON.stringify(data, null, 2))
            console.log('Product saved');
        } catch (error) {
            console.log(error);
        }
    };

    async getById(id) {
        try {
            const productData = await this.getAll();
            const productDetail = productData.find(p => p.id == id);
            console.log(productDetail);
        } catch (err) {
            console.log(null);
        }
    };

     async deleteAll() {
        try {
            await fs.writeFile(this.product, JSON.stringify([], null, 2))
            console.log("Deleted");
        } catch (err) {
            console.log('error');
        }
    }; 

    async deleteById(id) {
        const productInfo = await this.getAll()
        const newArr = productInfo.findIndex(p => p.id == id)
        productInfo.splice(newArr, 1)
        try {
            await fs.writeFile(this.product, JSON.stringify(productInfo, null, 2))
        } catch (err) {
            console.log('error');
        }
    };
};


const productos = new Contenedor("products.txt");

   /*  productos.save(
    {
        "title": "ESTEREO",
        "price": 30000,
        "thumbnail": "stereo.jpg"
    }); */
 
 /*   productos.save(
    {
        "title": "TV",
        "price": 120000,
        "thumbnail": "tv.jpg"
    }); */

  /*  productos.save(
    {
        "title": "PC",
        "price": 180000,
        "thumbnail": "pc.jpg"
    });  */
  
//productos.deleteAll();
//productos.deleteById(2);
//productos.getById(2);

//productos.getAll();

/*  const products = productos.getAll()
    const productoRandom = products [Math.floor(Math.random() *products.length)];
    console.log(productoRandom);  */

module.exports = Contenedor;