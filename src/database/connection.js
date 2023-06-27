const sql = require('mssql')

const  dbSet = {
user : "userNode",
password : "node1234",
server : "localhost",
database : "NodePr",
    options : {
        trustServerCertificate : true
    }
};

export async function getConnection () {
    try{
        const  pool = await sql.connect(dbSet);
        return pool;
    }
    catch(error){
        console.log("Error de conexion...")
    }

}

export { sql }