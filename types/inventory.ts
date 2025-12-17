export type Category = "Collectibles" | "Electronics";
export type Condition = "New" | "Like New" | "Used" | "Sealed";
export type Availability = "Available" | "Sold";

export interface InventoryItem {
  id: string;
  title: string;
  category: Category;
  condition: Condition;
  availability: Availability;
  images: string[];
  description: string;
  specifications?: Record<string, string>;
  tags?: string[];
}

export interface InquirySubmission {
  id: string;
  timestamp: string;
  fullName: string;
  country: string;
  contactMethod: string;
  itemOfInterest: string;
  message: string;
}
