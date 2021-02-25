import 'dotenv/config';

import jwt from 'jsonwebtoken';

export const checkAuth = (token: string) => {
    const secret = process.env.SECRET_JWT;
    
    const result = jwt.verify(token, secret, (err, decoded) => {
        if(err)
            return { status: false, body: 'token invalid' };
        
        return { status: true, body: decoded };
    });

    return result;
}