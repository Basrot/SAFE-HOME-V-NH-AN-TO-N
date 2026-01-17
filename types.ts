
export enum ServiceType {
  TAXI = 'taxi',
  DRIVER = 'driver'
}

export enum VehicleType {
  MOTORBIKE = 'motorbike',
  CAR = 'car'
}

export type TripStatus = 'idle' | 'searching' | 'waiting_confirm' | 'driver_assigned' | 'in_progress' | 'completed' | 'cancelled';

export interface UserProfile {
  name: string;
  phone: string;
  avatar: string;
  points: number;
}

export interface Booking {
  id: string;
  userPhone: string;
  userName: string;
  from: string;
  to: string;
  distance: number;
  serviceType: ServiceType;
  vehicleType: VehicleType;
  licensePlate?: string; // Biển số xe cho dịch vụ lái hộ
  price: number;
  status: TripStatus;
  timestamp: number;
}

export interface Transaction {
  id: string;
  amount: number;
  type: 'earn' | 'withdraw';
  description: string;
  date: string;
}
