const userController = require("../controllers/user.controller");
const express = require("express");
const router = express.Router();

router.post("/register", userController.register);

/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - firstName
 *                 - lastName
 *                 - emailId
 *                 - password
 *              properties:
 *                  firstName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Navin
 *                  lastName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Balla
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: navin@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.post("/login", userController.login);

 /**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - emailId
 *                 - password
 *              properties:
 *                  emailId:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: navin@sample.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: abcd
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
