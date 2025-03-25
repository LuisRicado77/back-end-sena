
import { GetError } from "../../domain/errors/GetError";
import { NotCreatedError } from "../../domain/errors/NotCreatedError";
import { UpdateError } from "../../domain/errors/UpdateError";
import {
    ILeaseRentalApplication,
    ILeaseRentalApplicationCreate,
} from "../../domain/interfaces/ILeaseRentalApplication";
import { ILeaseRentalApplicationService } from "../../domain/services/ILeaseRentalApplication.service";
import { ApplicationModel } from "../database/models/application.model";
import { DeleteError } from "../../domain/errors/DeleteError";

export class ApplicationService implements ILeaseRentalApplicationService {


    async resposeRequest(
        idSolicitud: string,
        accion: { status: string }
    ): Promise<void> {
        try {
            //console.log(newStatus)
            const newStatus = accion.status
            console.log(newStatus)
            const applicationExisted = await ApplicationModel.findOne({where:{idApplication:idSolicitud, isActive : 1}});
            if (!applicationExisted) {
                console.log("could not found an appliction")
                throw new GetError("Could not find the application");
            }
            console.log("application found it",applicationExisted.toJSON())
            console.log("📝 actualizando. la solicitud");

            await applicationExisted.update({ status:newStatus });

            console.log("✅ se actualizo:", applicationExisted);

        } catch(error){
            console.error("🔥 Error en responseRequest:", error);
            throw new UpdateError("Could not update with success");
        }
    }
    
    async findById(
        id: ILeaseRentalApplication["idApplication"]
    ): Promise<ILeaseRentalApplication> {

        try {
            const applicationFound = await ApplicationModel.findOne({
                where: { idApplication: id, isActive: 1 }
            })

            if (!applicationFound) {
                throw new GetError("Could not found the application");
            }

            const application: ILeaseRentalApplication = {
                idApplication: applicationFound.idApplication.toString(),
                idProperty: applicationFound.idProperty?.toString(),
                idTenant: applicationFound.idTenant?.toString(),
                status: applicationFound.status,
                dateRequest: applicationFound.dateRequest,
                isActive: applicationFound.isActive
            }

            return application;

        } catch (error) {
            console.log(error)
            throw new GetError("Could not found the Application");

        }
    }
    async update(
        id: ILeaseRentalApplication["idApplication"],
        leaseRentalApplication: ILeaseRentalApplication
    ): Promise<ILeaseRentalApplication> {

        try {
            const applicationExisted = await ApplicationModel.findByPk(id)
            if (!applicationExisted) {
                throw new Error("Could not update because the application does not exist");
            }
            await applicationExisted.update(leaseRentalApplication);


            const application: ILeaseRentalApplication = {
                idApplication: applicationExisted.idApplication.toString(),
                idProperty: applicationExisted.idProperty.toString(),
                idTenant: applicationExisted.idTenant.toString(),
                dateRequest: applicationExisted.dateRequest,
                status: applicationExisted.status,
                isActive: applicationExisted.isActive
            }
            return application;

        } catch (error) {
            throw new UpdateError("Could not update with success");

        }
    }
    async sendRequest(
        leaseRentalApplication: ILeaseRentalApplicationCreate
    ): Promise<ILeaseRentalApplication> {
        try {
         
            console.log("📝 Creando nueva solicitud");
            const newApplication = await ApplicationModel.create(leaseRentalApplication);
            console.log("✅ Nueva solicitud creada:", newApplication);
    
            if (!newApplication) {
                throw new NotCreatedError("No se pudo crear la solicitud.");
            }
    
            const applicationFormatted: ILeaseRentalApplication ={
                idApplication: newApplication.idApplication.toString(),
                status: newApplication.status,
                dateRequest: newApplication.dateRequest,
                idProperty: newApplication.idProperty?.toString(),
                idTenant: newApplication.idTenant?.toString(),
                isActive: newApplication.isActive,
            }
            return applicationFormatted
        } catch (error) {
            console.error("🔥 Error en sendRequest:", error);
            throw new NotCreatedError("Could not send the Application");
        }
    }
    async getAllApplications(): Promise<ILeaseRentalApplication[]> {
        try {

            const applications: ApplicationModel[] = await ApplicationModel.findAll({ where: { isActive: 1 } })
            if (!applications || applications.length === 0) {
                throw new GetError("Could not find users");
            }
            const formattedApplications: ILeaseRentalApplication[] = applications.map((application) => ({
                idApplication: application.idApplication.toString(),
                status: application.status,
                dateRequest: application.dateRequest,
                isActive: application.isActive,
                idProperty: application.idProperty?.toString(),
                idTenant: application.idTenant?.toString()
            }))
            return formattedApplications
        } catch (error) {
            console.log(error)
            throw new GetError("Could not get with success");

        }
    }
    async cancelRequest(idApplication: ILeaseRentalApplication["idApplication"]): Promise<void> {

        try {
            const applicationFound = await ApplicationModel.findOne({ where: { idApplication: idApplication, isActive: 1 } })

            if (!applicationFound) {
                throw new Error("");

            }
            const [rowsUpdate] = await ApplicationModel.update({ isActive: 0 }, { where: { idApplication: idApplication } })
            if (rowsUpdate === 0) {
                throw new UpdateError("Could  not udáte woth success");

            }
        } catch (error) {
            console.log(error)
            throw new DeleteError("");

        }

    }
}
