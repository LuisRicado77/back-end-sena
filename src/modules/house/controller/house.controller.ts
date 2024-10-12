import { Ihouse, IhouseUpdate} from "../interfaces/house.interface";
import { houseModel } from "../models/house.model";

export const addhouse = async (house:Ihouse) =>{
    try {
       const newhouse = new houseModel(house);
       return await newhouse.save();
    } catch (error) {
        throw new Error("Could not save in database")
    }
};

export const updatehouse = async (id:string,house:IhouseUpdate) =>{
    try {
        return await houseModel.findByIdAndUpdate(id,house)
    } catch (error) {
        throw new Error("Could not update in database")
    }
}
export const gethouses = async () =>{
    try{
        return await houseModel.find();
    }catch(error){
        throw new Error("Could not read in database");
    }
};


export const gethousesById = async (id:string) =>{
    try{
        return await houseModel.findById(id);
    }catch(error){
        throw new Error("Could not read in database");
    }
};

export const deletehouseById = async (id:string) =>{
    try{
        return await houseModel.findByIdAndDelete(id);
    }catch(error){
        throw new Error("Could not read in database");
    }
};