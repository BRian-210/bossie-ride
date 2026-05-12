import { m as mockLocations } from "./location.BmOrolG9.js";
const mockDrivers = [{
  driverId: "drv_456",
  name: "Brian Githinji",
  rating: 4.8,
  phone: "+254742052920",
  profileImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/bd2b84c6-4c73-437f-a8a5-27b723d6aac9.png",
  vehicle: {
    model: "Toyota Vitz",
    plateNumber: "KDD 543Z",
    color: "Blue"
  },
  currentLocation: {
    lat: -1.28,
    lng: 36.82
  }
  // Near City Center
}];
const mockRideTypes = [{
  typeId: "standard",
  name: "Bossie Standard",
  description: "Affordable everyday rides.",
  iconName: "Car",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/219edb8c-bf21-4a35-9fd9-1430366a50bb.png",
  baseFareKsh: 300,
  capacity: 4,
  etaMinutesDefault: 5
}, {
  typeId: "premium",
  name: "Bossie Premier",
  description: "Luxury sedans and professional drivers.",
  iconName: "CarTaxiFront",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/0940f566-c27d-4e6b-b5b1-962f25fd68d3.png",
  baseFareKsh: 650,
  capacity: 4,
  etaMinutesDefault: 7
}, {
  typeId: "shared",
  name: "Bossie Shared",
  description: "Save money by sharing your ride.",
  iconName: "Users",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/95cbb5f1-ef8e-4b33-ac6c-37f0b7525cb5.png",
  baseFareKsh: 200,
  capacity: 6,
  etaMinutesDefault: 9
}, {
  typeId: "bodaboda",
  name: "Bossie Boda",
  description: "Quick motorcycle rides through traffic.",
  iconName: "Bike",
  imageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/6711a2f3-8241-4f7d-b21d-c0c999d90ced.png",
  baseFareKsh: 150,
  capacity: 1,
  etaMinutesDefault: 3
}];
const standardRideType = mockRideTypes.find((t) => t.typeId === "standard");
const mockCurrentRide = {
  rideId: "RIDE_123456",
  status: "IN_TRANSIT",
  pickupLocation: mockLocations[0],
  // City Center Plaza
  dropoffLocation: mockLocations[1],
  // The Paddock Apartments
  selectedRideType: standardRideType,
  estimatedFare: 450,
  currentEtaMinutes: 8,
  driverDetails: mockDrivers[0],
  driverMapImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/f128822b-1c6b-49a8-aec9-cd989fa97cc2.png"
};
const mockCompletedRide = {
  ...mockCurrentRide,
  finalFare: 480,
  // Slight difference due to traffic/route correction
  distanceKm: 9.3,
  durationMinutes: 20
};
export {
  mockRideTypes as a,
  mockCompletedRide as b,
  mockCurrentRide as m
};
