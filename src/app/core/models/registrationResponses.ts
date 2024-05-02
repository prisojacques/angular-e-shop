import {RegistrationResponseData} from "./registrationResponseData";

export interface RegistrationResponses {
    success: boolean
    data: RegistrationResponseData
    message: string
    errors: string | null
}