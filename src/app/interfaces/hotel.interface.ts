import { Service } from "./service.interface";

export interface Hotel {
  hotelId: number;
  name: string;
  price: number;
  description: string;
  image: string;
  street: string;
  number: string;
  cityName: string;
  services: Service[];
  averageRating: number;
}
