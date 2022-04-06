const config = require('./config');

const inyection_sql = async (req,res,next) => 
{
    if(req.headers.authorization != undefined)
    {
        if(req.headers.authorization != config.AUTH)
        {
            res.status(401).send('Sin autorización')
        }
        else
        {
            next();
        }
    }
    else
    {
        res.status(401).send('Sin autorización')
    }    

}

module.exports = 
{
    inyection_sql
}