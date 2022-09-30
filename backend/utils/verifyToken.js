import jwt from 'jsonwebtoken';

export const veryfyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    // console.log("TOKEN: ", token);
    if (!token) {
        return next(res.json('You are not authenticated'))
    }

    jwt.verify(token, process.env.JWT, (error, user) => {
        if (error) return res.status(500).json('Token not valid')
        req.user = user;
        next()
    })
}


export const veryfyUser = (req, res, next) => {
    veryfyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.json('You are not authorized')
        }
    })
}

export const veryfyIsAdmin = (req, res, next) => {
    veryfyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.json('You are not authorized')
        }
    })
}