const express = require("express");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require("swagger-ui-express");
const app = express();

const userRoutes = require("./routes/user.routes");
app.use(express.json());

const swaggerOption = {
    swaggerDefinition:(swaggerJSDoc.Options = {
        info:{
            title:"my-posts",
            description:"Api documentation",
            contact:{
                name:"Developer"
            },
            servers:["http://localhost:3001/"]
        },
    }),
    apis:["index.js","./routes/*.js"],
}; 

const swaggerDocs = swaggerJSDoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/users",userRoutes);


app.listen(3001, ()=>{
    console.log("Port  is working on 3001")
})

