import {verify} from 'jsonwebtoken'

export default async function profileHandler(req, res) {
    const {mytokenName} = req.cookies

    if(!mytokenName) {
        return res.status(401).json({error: 'no token'})
    }
    try { 
        const user = verify(mytokenName, 'secret')
        return res.json({email: user.email})
    } catch (error) {
        return res.status(401).json({error: 'invalid token'})
    }
} 