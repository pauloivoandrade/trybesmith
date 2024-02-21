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

export type FormatedUser = {
  id: 3,
  username: string,
  vocation: string,
  level: number,
  password: string,
  productIds: []
};
