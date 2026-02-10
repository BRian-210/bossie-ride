export interface MemoryMessage {
  id: string;
  rideId: string;
  senderId: string;
  senderType: 'rider' | 'driver';
  text: string;
  createdAt: Date;
}

const memoryMessages: MemoryMessage[] = [];

export function addMemoryMessage(input: Omit<MemoryMessage, 'id' | 'createdAt'>) {
  const message: MemoryMessage = {
    ...input,
    id: `mem_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    createdAt: new Date(),
  };
  memoryMessages.push(message);
  return message;
}

export function getMemoryMessages(rideId: string) {
  return memoryMessages
    .filter((message) => message.rideId === rideId)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
}
