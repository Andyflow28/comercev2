import { pool } from "../../config/db";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

dotenv.config();

export default async function handler(req, res) {
  return await getBuy(req, res);
}

const getBuy = async (req, res) => {
  try {
    const { TokenName } = req.cookies;

    const user = Jwt.verify(TokenName, process.env.ID);
    const { value } = req.body;

    const [result] = await pool.query(
      `SELECT * FROM user WHERE email = "${user.email}";`
    );
    if (result[0] !== undefined) {
      const resu = await pool.query(
        `INSERT INTO order_user (user_id) values (${result[0].id});`
      );
      const [resultado] = await pool.query(
        `SELECT max(id_order) FROM order_user WHERE user_id = ${result[0].id};`
      );
      const idOrder = resultado[0]["max(id_order)"];
      console.log(`el valor del producto es ${value}`);
      const resultTotal = await pool.query(
        `INSERT INTO order_details (order_id_order, product_id_product) values (${idOrder}, ${value});`
      );
      return res
        .status(200)
        .json({ message: "your order has completed sucessfully" });
    }
  } catch (error) {
    console.log(error);
  }
};
