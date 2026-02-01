
        
import type { LocationModel } from "./location";
import { mockLocations } from "./location";
import type { DriverModel } from "./driver";
import { mockDrivers } from "./driver";

export type RideStatus = "REQUESTING" | "PENDING" | "ACCEPTED" | "IN_TRANSIT" | "ARRIVED" | "COMPLETED" | "CANCELLED";

export interface RideTypeModel {
  typeId: string;
  name: string; // e.g., Standard, Premium, Shared
  description: string;
  iconName: string; // Lucide icon
  imageUrl: string; // Image of the vehicle type
  baseFareKsh: number;
  capacity: number; // Max passengers
  etaMinutesDefault: number;
}

export interface RideRequestSummaryModel {
  pickupLocation: LocationModel;
  dropoffLocation: LocationModel;
}

export interface CurrentRideModel extends RideRequestSummaryModel {
  rideId: string;
  status: RideStatus;
  selectedRideType: RideTypeModel;
  estimatedFare: number; // KES
  currentEtaMinutes: number;
  driverDetails?: DriverModel;
  driverMapImageUrl: string; // Real-time map visualization
}

export interface CompletedRideDetailsModel extends CurrentRideModel {
  finalFare: number;
  distanceKm: number;
  durationMinutes: number;
  paymentStatus: "PAID" | "UNPAID";
  ratingGiven: number | null; // Rider rating
}

export interface RideHistoryItemModel {
  rideId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  pickupLocationName: string;
  dropoffLocationName: string;
  costKsh: number;
  status: "COMPLETED" | "CANCELLED";
}

// --- Mock Data ---

export const mockRideTypes: RideTypeModel[] = [
  {
    typeId: "standard",
    name: "Bossie Standard",
    description: "Affordable everyday rides.",
    iconName: "Car",
    imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/219edb8c-bf21-4a35-9fd9-1430366a50bb.png",
    baseFareKsh: 300,
    capacity: 4,
    etaMinutesDefault: 5,
  },
  {
    typeId: "premium",
    name: "Bossie Premier",
    description: "Luxury sedans and professional drivers.",
    iconName: "CarTaxiFront",
    imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/0940f566-c27d-4e6b-b5b1-962f25fd68d3.png",
    baseFareKsh: 650,
    capacity: 4,
    etaMinutesDefault: 7,
  },
  {
    typeId: "shared",
    name: "Bossie Shared",
    description: "Save money by sharing your ride.",
    iconName: "Users",
    imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/95cbb5f1-ef8e-4b33-ac6c-37f0b7525cb5.png",
    baseFareKsh: 200,
    capacity: 6,
    etaMinutesDefault: 9,
  },
  {
    typeId: "bodaboda",
    name: "Bossie Boda",
    description: "Quick motorcycle rides through traffic.",
    iconName: "Bike",
    imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/6711a2f3-8241-4f7d-b21d-c0c999d90ced.png",
    baseFareKsh: 150,
    capacity: 1,
    etaMinutesDefault: 3,
  },
];

const standardRideType = mockRideTypes.find(t => t.typeId === "standard")!;

export const mockCurrentRide: CurrentRideModel = {
  rideId: "RIDE_123456",
  status: "IN_TRANSIT",
  pickupLocation: mockLocations[0], // City Center Plaza
  dropoffLocation: mockLocations[1], // The Paddock Apartments
  selectedRideType: standardRideType,
  estimatedFare: 450.00,
  currentEtaMinutes: 8,
  driverDetails: mockDrivers[0],
  driverMapImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/f128822b-1c6b-49a8-aec9-cd989fa97cc2.png",
};

export const mockCompletedRide: CompletedRideDetailsModel = {
  ...mockCurrentRide,
  status: "COMPLETED",
  estimatedFare: 450.00,
  finalFare: 480.00, // Slight difference due to traffic/route correction
  distanceKm: 9.3,
  durationMinutes: 20,
  paymentStatus: "UNPAID", // Default to unpaid for payment initiation flow
  ratingGiven: null,
};

export const mockRideHistory: RideHistoryItemModel[] = [
  {
    rideId: "RIDE_001",
    date: "2025-11-15",
    time: "18:30",
    pickupLocationName: "JKIA",
    dropoffLocationName: "City Center Plaza",
    costKsh: 1200.00,
    status: "COMPLETED",
  },
  {
    rideId: "RIDE_002",
    date: "2025-11-15",
    time: "07:15",
    pickupLocationName: "The Paddock Apartments",
    dropoffLocationName: "Westlands Mall",
    costKsh: 350.50,
    status: "COMPLETED",
  },
  {
    rideId: "RIDE_003",
    date: "2025-11-14",
    time: "13:00",
    pickupLocationName: "CBD Office Tower",
    dropoffLocationName: "Kileleshwa Residence",
    costKsh: 550.00,
    status: "COMPLETED",
  },
  {
    rideId: "RIDE_004",
    date: "2025-11-13",
    time: "20:45",
    pickupLocationName: "Restaurant D",
    dropoffLocationName: "Home",
    costKsh: 420.00,
    status: "COMPLETED",
  },
];

export function getRideDetails(rideId: string): CompletedRideDetailsModel {
  // Mock function to retrieve details for a historical ride
  if (rideId === mockCompletedRide.rideId) {
    return mockCompletedRide;
  }
  
  // Return a generic completed ride for demonstration
  return {
    ...mockCompletedRide,
    rideId,
    // Simulate payment history for list view demonstration
    paymentStatus: "PAID",
    ratingGiven: 5,
    pickupLocation: { ...mockLocations[0], name: "Historical Pickup" },
    dropoffLocation: { ...mockLocations[1], name: "Historical Dropoff" },
    finalFare: 750.00,
    distanceKm: 15.1,
  };
}
        
      