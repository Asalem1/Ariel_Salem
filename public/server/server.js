import express from 'express';
import bodyParser from 'body-parser';
import mongo from 'mongo';
import mongoose from 'mongoose';

const app = express();

/*Connecting the Database*/

// const connection = 'mongodb://thyme:thyme@ds133340.mlab.com:33340/orion-thyme';

// mongoose.connect(connection);
// mongoose.connection.once('open', () => {
//   console.log('Ready to hack into the mainframe: ', connection);
// });

/*Connecting the Server*/
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + '../../public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`connected to port: ${port}
    -+88_
    _+880_
    _++88_
    _++88_
    __+880_________________________++_
    __+888________________________+88_
    __++880______________________+88_
    __++888_____+++88__________+++8_
    __++8888__+++8880++88____+++88_
    __+++8888+++8880++8888__++888_
    ___++888++8888+++888888++888_
    ___++88++8888++8888888++888_
    ___++++++888888888888888888_
    ____++++++88888888888888888_
    ____++++++++000888888888888_
    _____+++++++000088888888888_
    ______+++++++00088888888888_
    _______+++++++088888888888_
    _______+++++++088888888888_
    ________+++++++8888888888_
    ________+++++++0088888888_
    ________++++++0088888888_
    ________+++++0008888888_
    ________#############_`);
})
