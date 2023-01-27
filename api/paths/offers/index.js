module.exports = function (){
    var operations = [ 
        GET,
        POST,
        PUT
    ]

    function GET(req, res, next){
        database.query(`SELECT * FROM offers`, function(err, results){
            if(err)throw(err);
            console.log(results);
    
        });
    }

    function POST(req, res,next){
        database.query(`INSERT INTO offers(offerstatus, userid, gameid) VALUES(${req.body.offerstatus}, ${req.body.userid}, ${req.body.gameid})`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        console.log("Registered successfully");
    }

    function PUT(req, res, next){
        database.query(`UPDATE offers SET status = "${req.body.offerstatus}"`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
    }

///api doc stuff
    GET.apiDoc = {
        summary: "gets all offers",
        // parameters: [
        //     {$ref: "#/components/parameters/schemas/offers"}
        // ],
        operationId: "getOffers",
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
        summary: "register an offfer",
        parameters:[
            {$ref: "#/componets/parameters/schemas/offers"}
        ],
        operationId:"registerOffer",
        responses:{
            '200':{
                description:"OK"
            },
            '400':{
                description:"Bad Request"
            }
        }
    }

    PUT.apiDoc={
        summary: "update the status of an offer",
        parameters:[
            {$ref: "#/components/schemas/parameters/statusUpdate"}
        ],
        operationId:"updateOffer",
        responses:{
            '200':{
                description: "OK"
            },
            '400':{
                description:"bad request"
            }
        }
    }


    return operations
}