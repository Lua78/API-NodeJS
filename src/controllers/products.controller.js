import { getConnection,sql } from '../database/connection'


export const getProducts =  async (req,res)  => {
    try{
        const pool = await getConnection();
        const result = await pool.query("select * from products")
        console.log(result);
        res.json(result.recordset);
        pool.close();
    }catch(err){
        console.log(err);
    }
};

export const createProduct = async (req,res) =>{
    const {namepr,description, price} = req.body
    let {quantity} = req.body
    if(namepr==null || description == null || price == null){
        res.status(400).json({msg : "Bad Request. Please fill all fields..."})
    }
    if(quantity == null) quantity = 0;

   
    try{
        const pool = await getConnection();
        await pool.request()
        .input("namepr",sql.VarChar,namepr)
        .input("description",sql.Text,description)
        .input("price",sql.Money,price)
        .input("quantity",sql.Int,quantity)
        .query("insert into products values (@namepr,@description,@price,@quantity)")
        console.log("Done...");
        res.json("New product")
        pool.close();
    }catch(err){
        console.log(err);
    }
};

export const delProduct = async(req,res)=>{
    const {id} = req.params
    try{
        const pool = await getConnection();
        await pool.request()
        .input("id",sql.Int,id)
        .query("delete from products where id = @id")
        console.log("Done...");
        res.json("Deleted")
        pool.close();
    }catch(err){
        console.log(err);
    }    
}

export const updateProduct = async (req,res) =>{
    console.log("sdadadasdasd")
    const {namepr,description, price,quantity} = req.body
    const {id}  = req.params
    if(namepr==null || description == null || price == null || quantity == null){
        res.status(400).json({msg : "Bad Request. Please fill all fields..."})
    }

   
    try{
        const pool = await getConnection();
        await pool.request()
        .input("namepr",sql.VarChar,namepr)
        .input("description",sql.Text,description)
        .input("price",sql.Money,price)
        .input("quantity",sql.Int,quantity)
        .input("id",sql.Int,id)
        .query("update products set namepr = @namepr,description = @description,price = @price,quantity = @quantity where id = @id")
        console.log("Done...");
        res.json("Product updated")
        pool.close();
    }catch(err){
        console.log(err);
    }
};

export const getProductById =  async (req,res)  => {
    try{
        const {id} = req.params
        const pool = await getConnection();
        const result = await pool.request()
        .input("id",sql.Int,id)
        .query("select * from products where id=@id")
        console.log(result);
        res.json(result.recordset);
        pool.close();
    }catch(err){
        console.log(err);
    }
};