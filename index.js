import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

const app = express();
const PORT= process.env.PORT || 3500;


//mongo connexion
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connect on database"))
.catch((error) => console.log("error to connect database:::", error));

//body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//routes 
routes(app);

//public middleware
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send("Hello word");
});



app.listen(PORT, () => console.log(`Server start with port ${PORT}`));