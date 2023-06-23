import mysql from 'mysql2'

const option = {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
}
console.log(option);

export const poolMysql = mysql.createPool(option).promise()

export const getRol = async() =>{
    
    const [rows] = await poolMysql.query(`SELECT * FROM ROL`)
    const result = rows;
    
    return  !!result? result : {}
}
