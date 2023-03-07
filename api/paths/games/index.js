var http = require("http");
module.exports = function(){
    var operations = [
        GET,
        POST
    ]

    function POST(req, res, next){
        database.query(`INSERT INTO games(gamename, publisher, publishingYear, gameCondition, game_owners) VALUES("${req.body.gamename}", "${req.body.publisher}", "${req.body.publishingYear}","${req.body.gameCondition}", "${req.body.game_owners}")`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        console.log("Registered successfully");
    }

    function GET(req, res){
        database.query(`SELECT * FROM games`, function(err, results){
            if(err)throw(err);
            console.log(results);
    
        });
    }

    //APIDOC STUFF
    GET.apiDoc = {
        summary: "gets all games",
        // parameters: [

        //     {$ref: "#/components/parameters/schemas/games"}
        // ],
        operationId: "getGames",
        responses:{
            '200':{
                description:"OK"
            },
            '400':{
                description: "bad request"
            }
        }
        
    }

    POST.apiDoc={
        summary: "register a game",
        // parameters:[
        //     {$ref: "#/componets/parameters/schemas/games"}
        // ],
        operationId:"registerGame",
        responses:{
            '200':{
                description:"OK"
            },
            '400':{
                description:"Bad Request"
            }
        }
    }
    return operations;
}