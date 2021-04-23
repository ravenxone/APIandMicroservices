//type of comments in this document and their meaning
// this is a usual comment
// ! ye kya bawasir bana diye ho?? (Important comments/red flags)
//* just fyi i'm a better programmer than you (note)
//? jo tu likh raha hai vo tu dekh raha hai? (question comment)
// TODO: BHAI PLEASE WEEKEND KE PEHLE KHATAM KARDENA (things to do)


const app = require ('express')();
const PORT = 8080;

app.listen(
    PORT, 
    () => console.log(`The app is live on https://localhost:${PORT}`)
    );

app.get('/someplace', (req, res)=>{
    res.status(200).send({
        "this" : "place",
        "is" : "awesome"
    }); 
});


