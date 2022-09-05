import {verify} from 'jsonwebtoken'
import dotenv from 'dotenv-safe'

dotenv.config()

export default async function revitionHandler(req, res) {
    try { 
        const {TokenName} = req.cookies
    
        const user = verify(TokenName, process.env.ID)
        return res.json({status: true})
    } catch (error) {
        return res.json({status: false})
    }
} 