const requestLogger = (req, res, next)=>{
    console.log('method:', req.method)
    console.log('path:', req.path)
    console.log('body:', req.body)
    console.log('---')
    next()
}
const unknownEndpoint = (req,res)=>{
    return res.status(404).send({message: unknownEndpoint})
}
module.exports = {
    requestLogger,
    unknownEndpoint
}