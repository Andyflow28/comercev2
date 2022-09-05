import {verify} from 'jsonwebtoken'

export default async function revitionHandler(req, res) {
    try { 
        const {mytokenName} = req.cookies
    
        const user = verify(mytokenName, 'secret')
        return res.json({status: true})
    } catch (error) {
        return res.json({status: false})
    }
} 