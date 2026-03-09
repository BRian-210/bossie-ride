const mockPaymentOptions = [{
  method: "MPESA",
  name: "M-PESA",
  iconUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/11/16/ef42f3d5-69a5-437a-8dbc-7dbebd2a3671.png",
  description: "Pay instantly via Safaricom M-Pesa."
}, {
  method: "CARD",
  name: "Credit/Debit Card",
  iconUrl: "Card",
  // Lucide icon
  description: "Visa, Mastercard, etc."
}, {
  method: "CASH",
  name: "Cash",
  iconUrl: "Wallet",
  // Lucide icon
  description: "Pay the driver directly."
}];
const mockPaymentSummary = {
  rideId: "RIDE_123456",
  amountDue: 480,
  referenceNumber: "BOSSIE_TX_00987"
};
const mockSuccessReceipt = {
  transactionId: "MPE_99011ABC",
  amountPaid: 480,
  referenceRideId: "RIDE_123456"
};
const mockFailureDetails = {
  errorCode: "MPE_TIMEOUT_408",
  errorMessage: "Payment approval timed out or was rejected on your device.",
  suggestions: ["Ensure your M-Pesa PIN is correct.", "Check if you have sufficient mobile balance.", "Try initiating the payment again."]
};
export {
  mockPaymentSummary as a,
  mockPaymentOptions as b,
  mockSuccessReceipt as c,
  mockFailureDetails as m
};
