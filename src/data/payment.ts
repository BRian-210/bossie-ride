
        
import { CompletedRideDetailsModel } from "./ride-completed";

export type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";
export type PaymentMethod = "MPESA" | "CARD" | "CASH";

export interface PaymentOptionModel {
  method: PaymentMethod;
  name: string;
  iconUrl: string; // Logo/Icon for the payment method
  description: string;
}

export interface PaymentSummaryModel {
  rideId: string;
  amountDue: number; // KES
  referenceNumber: string; // Internal reference
  paymentOptions: PaymentOptionModel[];
  currentPaymentStatus: TransactionStatus;
}

export interface PaymentReceiptModel {
  transactionId: string;
  amountPaid: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM:SS
  method: PaymentMethod;
  referenceRideId: string;
}

export interface PaymentFailureModel {
  errorCode: string;
  errorMessage: string;
  suggestions: string[];
}


export const mockPaymentOptions: PaymentOptionModel[] = [
  {
    method: "MPESA",
    name: "M-PESA",
    iconUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/ef42f3d5-69a5-437a-8dbc-7dbebd2a3671.png",
    description: "Pay instantly via Safaricom M-Pesa.",
  },
  {
    method: "CARD",
    name: "Credit/Debit Card",
    iconUrl: "Card", // Lucide icon
    description: "Visa, Mastercard, etc.",
  },
  {
    method: "CASH",
    name: "Cash",
    iconUrl: "Wallet", // Lucide icon
    description: "Pay the driver directly.",
  },
];


export const mockPaymentSummary: PaymentSummaryModel = {
  rideId: "RIDE_123456",
  amountDue: 480.00,
  referenceNumber: "BOSSIE_TX_00987",
  paymentOptions: mockPaymentOptions,
  currentPaymentStatus: "PENDING",
};

export const mockSuccessReceipt: PaymentReceiptModel = {
  transactionId: "MPE_99011ABC",
  amountPaid: 480.00,
  date: "2025-11-16",
  time: "10:45:22",
  method: "MPESA",
  referenceRideId: "RIDE_123456",
};

export const mockFailureDetails: PaymentFailureModel = {
  errorCode: "MPE_TIMEOUT_408",
  errorMessage: "Payment approval timed out or was rejected on your device.",
  suggestions: [
    "Ensure your M-Pesa PIN is correct.",
    "Check if you have sufficient mobile balance.",
    "Try initiating the payment again.",
  ],
};

/**
 * Simulates finding the Payment Summary for a completed ride.
 * In a real app, this would check if the ride's payment status is 'UNPAID'.
 */
export function getPaymentSummaryForRide(ride: CompletedRideDetailsModel): PaymentSummaryModel | null {
  if (ride.paymentStatus === "UNPAID") {
    return {
      ...mockPaymentSummary,
      rideId: ride.rideId,
      amountDue: ride.finalFare,
    };
  }
  return null;
}
        
      