
        
import type { CoordinatesModel } from "./location";

export interface VehicleModel {
  model: string; // e.g., Toyota Vitz
  plateNumber: string; // e.g., KBC 123A
  color: string; // e.g., White
}

export interface DriverModel {
  driverId: string;
  name: string;
  rating: number; // 1.0 to 5.0
  phone: string;
  profileImageUrl: string;
  vehicle: VehicleModel;
  currentLocation: CoordinatesModel;
}

export const mockDrivers: DriverModel[] = [
  {
    driverId: "drv_456",
    name: "Brian Githinji",
    rating: 4.8,
    phone: "+254742052920",
    profileImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/bd2b84c6-4c73-437f-a8a5-27b723d6aac9.png",
    vehicle: {
      model: "Toyota Vitz",
      plateNumber: "KDD 543Z",
      color: "Blue",
    },
    currentLocation: { lat: -1.28, lng: 36.82 }, // Near City Center
  },
];

export function getDriverById(driverId: string): DriverModel {
  return mockDrivers.find(d => d.driverId === driverId) || mockDrivers[0];
}
        
      