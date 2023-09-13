import axios, { AxiosInstance } from "axios";
import { ProductDTO } from "./dtos/product.dto";

const BASE_URL = "http://localhost:8080";

export class ProductsClient {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({ baseURL: BASE_URL });
  }
  async getProducts(): Promise<ProductDTO[]> {
    const url = "/products";
    const response = await this.instance({ method: "get", url });
    return response.data;
  }
  async createProduct(data: ProductDTO): Promise<ProductDTO> {
    const url = "/products";
    const response = await this.instance({ method: "post", url, data });
    return response.data;
  }
  async getProduct(data: ProductDTO): Promise<ProductDTO> {
    const url = "/products/id";
    const response = await this.instance({ method: "get", url, data });
    return response.data.id;
  }
  async updateProduct(data: ProductDTO): Promise<ProductDTO> {
    const url = "/products/id";
    const response = await this.instance({ method: "patch", url, data });
    return response.data.id;
  }

  async deleteProduct(data: ProductDTO): Promise<ProductDTO> {
    const url = "/products/id";
    const response = await this.instance({ method: "delete", url, data });
    return response.data.id;
  }
}

const client = new ProductsClient();

export default client;
