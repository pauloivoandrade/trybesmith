export type ProductResponses = {
  id: number,
  name: string,
  price: string,
  userId: number,
};

export type ProductResponse<T> = {
  status: number, 
  data: T,
};
export type MessageResponse = {
  message: string,
};