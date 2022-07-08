const mongoose = require("mongoose");

class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://vgutierrezsandon82:vgutierrezsandon82@verogs.q5jh5cf.mongodb.net/MATRIC_PRO?retryWrites=true&w=majority",
                {useNewUrlParser:true}
            );
            console.log("Conectado a la base de datos")

        }catch(e){
            console.error(e)

        }
    }
}

exports.controller = new Controller()