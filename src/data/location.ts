
        
export interface CoordinatesModel {
    lat: number;
    lng: number;
  }
  
  export interface LocationModel {
    locationId: string;
    name: string; // User-friendly name (e.g., "Airport Terminal A")
    address: string; // Full street address
    coords: CoordinatesModel;
  }
  
  export const mockLocations: LocationModel[] = [
    {
      locationId: "loc_1",
      name: "City Center Plaza",
      address: "145 Main Street, CBD, Nairobi",
      coords: { lat: -1.286389, lng: 36.817223 },
    },
    {
      locationId: "loc_2",
      name: "The Paddock Apartments",
      address: "32 River Road, Westlands, Nairobi",
      coords: { lat: -1.2587, lng: 36.7963 },
    },
    {
      locationId: "loc_3",
      name: "Jomo Kenyatta International Airport (JKIA)",
      address: "Off Mombasa Road, Nairobi",
      coords: { lat: -1.3193, lng: 36.9272 },
    },
  ];
          
        