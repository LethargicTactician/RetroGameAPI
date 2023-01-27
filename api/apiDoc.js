const apiDoc = {
    openapi: "3.0.1",
    info: {
        title: "Retro Game Api",
        description: "This API give a bunch of stuff about users and games and games and users..you konw...allthat good stuff",
        version: "1.0.0"
    },
    paths:{},
    components: {
        parameters: {
            userIdentity:{
                $ref: "#/components/parameters/schemas/users/userId"

            },
            statusUpdate:{
                $ref: "#components/parameters/schemas/offers/state"
            }
        },
        schemas: {
            games:{
                type: "Object",
                properties:{
                    gameId:{
                        type:"Integer"
                    },
                    gamename: {
                        type:"string"
                    },
                    publisher:{
                        type: "string"
                    },
                    publishingYear:{
                        type: "Integer"
                    },
                    gameCondition:{
                        type:"string"
                    },
                    game_owners:{
                        type:"Integer"
                    }
                }

            },
            users:{
                type: "Object",
                properties:{
                    userId:{
                        type:"Integer"
                    },
                    username: {
                        type:"string"
                    },
                    email:{
                        type: "string"
                    },
                    password:{
                        type: "string"
                    },
                    streetAddress:{
                        type:"string"
                    },
                    city:{
                        type:"string"
                    },
                    state:{
                        type: "string"
                    },
                    zip:{
                        type: "Integer"
                    }
                }
                
            },

            offers:{
                type: "Object",
                properties:{
                    offerId:{
                        type:"Integer"
                    },
                    status: {
                        type:"Boolean/TinyInt"
                    },
                    userId:{
                        type: "Foreign key/ Integer"
                    },
                    gameId:{
                        type: "Foreign Key/ Integer"
                    }
                }
                
            }
        }
        
    }

}
module.exports = apiDoc