export interface IPaginationConfig {
  // total_items: number;
  // next_cursor: string;
  // prev_cursor: string;

  current_page: number;
  first_page_url: string;
  from: null;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: null;
  total: number;
}

// Define the structure of the data using an interface
export interface Product {
  SKU: number;
  Name: string;
  Description: string;
  Brand: string;
  Title: string;
  Gender: string;
  RETAIL: number | null;
  "Cost Price": number;
  Image_1: string;
  URL: string;
  Quantity: number;
  size: string;
  UPC: number | null;
  catalog_time: string;
  supplier: string;
}
