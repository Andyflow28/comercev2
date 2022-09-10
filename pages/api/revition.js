import {verify} from 'jsonwebtoken'

export default async function revitionHandler(req, res) {
    try { 
        const {TokenName} = req.cookies
    
        const user = verify(TokenName, process.env.DB_CLIENT_ID)
        return res.json({status: true})
    } catch (error) {
        return res.json({status: false})
    }
} 