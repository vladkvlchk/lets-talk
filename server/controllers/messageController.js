export const sendMessage = async (req, res) => {
    try{
        console.log('ok')
    } catch (error){
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}