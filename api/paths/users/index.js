module.exports = function(){
    var operations = [
        GET,
        POST
    ]

    function GET(req,res, next){
        database.query(`SELECT * FROM users`, function(err, results){
            if(err) throw(err);
            console.log(results);
    
        });
    }

    function POST(req, res, next){
        if(!isValid){
            return res.status(400).json(errors);
        }else{
        database.query(`INSERT INTO users(email,username, password, streetAddress, city, state, zip) VALUES("${req.body.email}", "${req.body.username}", "${req.body.password}","${req.body.streetAddress}", "${req.body.city}","${req.body.state}", "${req.body.zip}")`, function(err, results){
            if(err) throw(err);
            console.log(results);
        });
        }
    }

    GET.apiDoc = {
        summary: "gets all users",
        // parameters: [
        //     {$ref: "#/components/parameters/schemas/users"}
        // ],
        operationId: "getUsers",
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
        summary: "register a user",
        parameters:[
            {$ref: "#/componets/parameters/schemas/users"}
        ],
        operationId:"register",
        responses:{
            '200':{
                description:"OK"
            },
            '400':{
                description:"Bad Request"
            }
        }
    }

    return operations
}