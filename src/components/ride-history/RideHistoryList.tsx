
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import SafeIcon from '@/components/common/SafeIcon'
import RideHistoryItem from './RideHistoryItem'

interface RideHistory {
  id: string
  date: string
  time: string
  pickupLocation: string
  dropoffLocation: string
  fare: string
  status: 'completed' | 'cancelled'
  driverName: string
  driverRating: number
  vehicleType: string
  distance: string
  duration: string
  paymentMethod: string
}

const mockRideHistory: RideHistory[] = [
  {
    id: 'ride-001',
    date: 'Today',
    time: '2:30 PM',
    pickupLocation: 'Nairobi CBD, Tom Mboya Street',
    dropoffLocation: 'Westlands, Mpesi Lane',
    fare: 'KES 450',
    status: 'completed',
    driverName: 'John Kipchoge',
    driverRating: 4.8,
    vehicleType: 'Standard',
    distance: '8.5 km',
    duration: '22 mins'
  },
  {
    id: 'ride-002',
    date: 'Yesterday',
    time: '5:15 PM',
    pickupLocation: 'Kilimani, Argwings Kodhek Road',
    dropoffLocation: 'Karen, Langata Road',
    fare: 'KES 680',
    status: 'completed',
    driverName: 'Mary Wanjiru',
    driverRating: 4.9,
    vehicleType: 'Premium',
    distance: '12.3 km',
    duration: '28 mins'
  },
  {
    id: 'ride-003',
    date: 'Dec 15, 2024',
    time: '10:45 AM',
    pickupLocation: 'Parklands, Limuru Road',
    dropoffLocation: 'Nairobi CBD, Kenyatta Avenue',
    fare: 'KES 520',
    status: 'completed',
    driverName: 'Peter Mwangi',
    driverRating: 4.7,
    vehicleType: 'Standard',
    distance: '9.8 km',
    duration: '25 mins'
  },
  {
    id: 'ride-004',
    date: 'Dec 14, 2024',
    time: '7:20 PM',
    pickupLocation: 'Upperhill, Bishops Road',
    dropoffLocation: 'Runda, Runda Road',
    fare: 'KES 590',
    status: 'completed',
    driverName: 'Samuel Kiplagat',
    driverRating: 4.6,
    vehicleType: 'Premium',
    distance: '11.2 km',
    duration: '26 mins'
  },
  {
    id: 'ride-005',
    date: 'Dec 13, 2024',
    time: '3:00 PM',
    pickupLocation: 'Lavington, Argwings Kodhek Road',
    dropoffLocation: 'Nairobi CBD, Muindi Mbingu Street',
    fare: 'KES 420',
    status: 'completed',
    driverName: 'Grace Njeri',
    driverRating: 4.9,
    vehicleType: 'Standard',
    distance: '7.5 km',
    duration: '20 mins'
  },
  {
    id: 'ride-006',
    date: 'Dec 12, 2024',
    time: '6:30 PM',
    pickupLocation: 'Gigiri, UN Avenue',
    dropoffLocation: 'Westlands, Mpesi Lane',
    fare: 'KES 750',
    status: 'completed',
    driverName: 'David Ochieng',
    driverRating: 4.8,
    vehicleType: 'Premium',
    distance: '14.2 km',
    duration: '32 mins'
  }
]

export default function RideHistoryList() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'cancelled'>('all')

  const filteredRides = mockRideHistory.filter(ride => {
    const matchesSearch = 
      ride.pickupLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.dropoffLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.driverName.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || ride.status === filterStatus
    
    return matchesSearch && matchesStatus
  })

  const totalSpent = mockRideHistory.reduce((sum, ride) => {
    const amount = parseInt(ride.fare.replace('KES ', ''))
    return sum + amount
  }, 0)

  const completedRides = mockRideHistory.filter(r => r.status === 'completed').length

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Rides</p>
                <p className="text-3xl font-bold text-primary">{mockRideHistory.length}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <SafeIcon name="Car" size={24} className="text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold text-green-600">{completedRides}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <SafeIcon name="CheckCircle" size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Spent</p>
                <p className="text-3xl font-bold text-primary">KES {totalSpent.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <SafeIcon name="Wallet" size={24} className="text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Search Rides</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <SafeIcon name="Search" size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <Input
              placeholder="Search by location or driver name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={filterStatus} onValueChange={(value) => setFilterStatus(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Rides</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>

      {/* Rides List */}
      <div className="space-y-3">
        {filteredRides.length > 0 ? (
          filteredRides.map((ride) => (
            <RideHistoryItem key={ride.id} ride={ride} />
          ))
        ) : (
          <Card>
            <CardContent className="pt-12 pb-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <SafeIcon name="Search" size={32} className="text-muted-foreground" />
                </div>
                <p className="text-lg font-medium">No rides found</p>
                <p className="text-sm text-muted-foreground">
                  {searchQuery ? 'Try adjusting your search criteria' : 'Your ride history will appear here'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Request New Ride Button */}
      <div className="sticky bottom-24 left-0 right-0">
        <a href="./ride-request.html" className="block">
          <Button className="w-full" size="lg">
            <SafeIcon name="Plus" size={20} className="mr-2" />
            Request New Ride
          </Button>
        </a>
      </div>
    </div>
  )
}
