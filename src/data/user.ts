
        
export interface UserModel {
    userId: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isRegistered: boolean;
  }
  
  export const mockCurrentUser: UserModel = {
    userId: "user_bossie_007",
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "+254700112233",
    email: "jane.doe@example.com",
    isRegistered: true,
  };
          
        