
const home = async (req, res) => {
    try {
        await res.status(200).send(`this is abhishek's router`);

    } catch (error) {
        console.log(error)

    }
}

const register = (req, res)=>{
    try {
        res.send('this is registration page')
    } catch (error) {
        res.send('error').status(400);
    }
}

const users = (req, res)=>{
    try {
        res.send('this is users page').status(200);
        
    } catch (error) {

        res.send("this is error").status(400);
        
    }
}

module.exports = {home, register,users};