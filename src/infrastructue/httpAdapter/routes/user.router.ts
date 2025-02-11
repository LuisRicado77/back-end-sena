import { Router,Request,Response } from "express";
import { RegisterUseCase } from '../../../application/usecases/general/Register.UseCase';
import { LoginUseCase } from "../../../application/usecases/general/Login.UseCase";
import { FindUserUseCase } from "../../../application/usecases/general/findUser.UseCase";
import { UserService } from "../../services/User.service";
import { ResponseAdapter } from "../responseAdapter";
import { NotFoundError } from "../../../domain/errors/NotFoundError";
import { UpdateUserUseCase } from "../../../application/usecases/general/updateUser.UseCase";
import { JwtTokenService } from '../../services/Token.service';
import { schemaValidator } from "../../middlewares/shema.middleware";
import { userSchemaCreate,userSchemaLogin,userSchemaUpdate } from "../../schemas/user.schema";

const userService = new UserService()
const jwtTokenService = new JwtTokenService()

const registerUserUseCase = new RegisterUseCase(userService);
const findUserUseCase = new FindUserUseCase(userService);
const updateUserUseCase = new UpdateUserUseCase(userService);
const loginUseCase = new LoginUseCase(userService,jwtTokenService);




const userRouter = Router();


//register an user
userRouter.post("/",schemaValidator(userSchemaCreate) ,async (req: Request, res: Response) =>{
    
    const body = req.body
    ResponseAdapter.handler(registerUserUseCase.execute(body), req, res);
    console.log("ejecutado create user post")
})

//update an user
userRouter.patch("/:id",schemaValidator(userSchemaUpdate) , async (req: Request, res: Response) =>{
    
    try {
        console.log("ruta del update running")
        const {id} = req.params;
        const body = req.body;
        ResponseAdapter.handler(updateUserUseCase.execute(id,body), req,res)
    } catch (error) {
        throw new NotFoundError();
    }
})


//getUserById
userRouter.get("/:id", async (req: Request, res: Response) =>{

    try{
        const {id} = req.params;
        console.log(id);
        ResponseAdapter.handler(findUserUseCase.execute(id),req,res)
    }catch(Error){
        throw new NotFoundError();
    }
})




//login
userRouter.post('/login', schemaValidator(userSchemaLogin),async (req: Request, res: Response) =>{
    try {
        const {email, password} = req.body;
        ResponseAdapter.handler(loginUseCase.execute({email,password}),req,res)
    } catch (error) {
        throw new Error("Could not authenticate with success");
        
    }
})



//getAllUser
/*userRouter.get("/", async (req: Request, res: Response)=>{
    try {
        ResponseAdapter.handler(ManagementUseCase.getAll(),req,res);
    } catch (error) {
        throw new NotFoundError();
    }
})*/



/*
//delete
userRouter.delete("/:id", async (req:Request, res: Response) =>{
    const id = req.params.id
    try{
        ResponseAdapter.handler(deleteUser.UseCase.execute(id),req, res)
    }catch(error){
        throw new NotFoundError();
    }
})*/

//update


export {userRouter}