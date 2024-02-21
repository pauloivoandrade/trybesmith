export type UserResponses = {
  id?: number;
  username?: string;
  vocation: string;
  level: number;
  password: number;
  productIds?: number;
}[];
  
export type UserResponse<T> = {
  status: number, 
  data: T,
};

export type UserAndProductResponse = {
  username?: string,
  productIds?: number[],
};
