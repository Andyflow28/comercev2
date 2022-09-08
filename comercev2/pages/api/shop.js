import { verify } from "jsonwebtoken";
import { pool } from "../../config/db";
import dotenv from "dotenv-safe";

dotenv.config();

export default async function shophandler(req, res) {
  try {
    const { TokenName } = req.cookies;
    const user = verify(TokenName, process.env.ID);
    console.log(user);
    let ids = [];
    let names = [];
    const [consult] = await pool.query(
      `SELECT id FROM user WHERE email = '${user.email}'`
    );
    if(consult[0] !== undefined) {
      const [select] = await pool.query(
        `SELECT id_order FROM order_user WHERE user_id = ${consult[0].id}`
      );
      if(select[0] !== undefined) {
        console.log(select.length);     
        for (let i = 0; i <= (select.length - 1); i++) {
          const [restore] = await pool.query(
            `SELECT product_id_product FROM order_details WHERE order_id_order = ${select[i].id_order}`
          );
          console.log(restore[0]);
          ids.push(restore[0].product_id_product);
        }
      }
    }


    if (ids !== []) {
      for (let i = 0; i <= ids.length - 1; i++) {
        const [result] = await pool.query(
          `SELECT name_product FROM product WHERE id_product = ${ids[i]}`
        );
        console.log(`result es ${result}`);
        if (names !== []) {
          names.push(result[0].name_product);
        }
      }
      if (names !== []) {
        return res.status(200).json(names);
      }
    }
  } catch (error) {
    return res.status(500).json({ error });
  }
}
