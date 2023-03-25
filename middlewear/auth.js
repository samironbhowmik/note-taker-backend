const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    try {
        let token = req.headers.authorization
        if(token)
        {
            token = token.split(" ")[1]
            let user = jwt.verify(token, process.env.JWT_KEY)
            req.userId = user.id
        }
        else{
            res.json({
                status:"failed",
                message:"user is unauthorized"
            })
        }
    } catch (error) {
        res.json({
            status:"failed",
            message:error.message
        })
    }
}