import { UserDetail } from "@/types/userDetail";

export function validation(userDetail: UserDetail): { isValid: boolean; message?: string } {
    if (!userDetail.first_name.trim()) return { isValid: false, message: "Please Enter a your First Name" }
    if (!userDetail.last_name.trim()) return { isValid: false, message: "Please Enter a your Last Name" }
    if (!userDetail.gender.trim()) return { isValid: false, message: "Please Enter a your Gender" }
    if (userDetail.age <= 0) return { isValid: false, message: "Please Enter a Valid Age" }
    if (userDetail.height <= 0) return { isValid: false, message: "Please Enter a Valid Height" }
    if (userDetail.currentWeight) return { isValid: false, message: "Please Enter a valid Weight" }
    if (userDetail.targetWeight) return { isValid: false, message: "Please Enter a valid Weight" }

    return { isValid: true }
}