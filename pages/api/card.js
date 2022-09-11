import { pool } from "./config/db";

export default async function cardhandler(req, res) {
  return await getPagins(req, res);
}

const getPagins = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM product");
    const [resul] = await pool.query("SELECT * FROM order_details");
    return res.status(200).json({ product: result, payed: resul });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};
