export interface MenuItem {
  id: string;           // Unique identifier
  name: string;         // Item name (e.g., "Caesar Salad")
  description: string;  // Item description (e.g., "Fresh romaine lettuce...")
  price: number;        // Price in dollars/cents (e.g., 12.99)
  imageUrl?: string;    // Optional image URL (for future story 1.2)
  category?: string;    // Optional category (for future story 2.5)
}
