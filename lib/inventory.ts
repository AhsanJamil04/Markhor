import { InventoryItem } from "@/types/inventory";
import inventoryData from "@/data/inventory.json";

export function getAllItems(): InventoryItem[] {
  return inventoryData as InventoryItem[];
}

export function getItemById(id: string): InventoryItem | undefined {
  return getAllItems().find((item) => item.id === id);
}

export function getItemsByCategory(category: string): InventoryItem[] {
  if (!category || category === "All") {
    return getAllItems();
  }
  return getAllItems().filter((item) => item.category === category);
}

export function getItemsByCondition(condition: string): InventoryItem[] {
  if (!condition || condition === "All") {
    return getAllItems();
  }
  return getAllItems().filter((item) => item.condition === condition);
}

export function getItemsByAvailability(availability: string): InventoryItem[] {
  if (!availability || availability === "All") {
    return getAllItems();
  }
  return getAllItems().filter((item) => item.availability === availability);
}

export function searchItems(query: string): InventoryItem[] {
  if (!query) {
    return getAllItems();
  }
  const lowerQuery = query.toLowerCase();
  return getAllItems().filter(
    (item) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

export function filterItems(
  items: InventoryItem[],
  filters: {
    category?: string;
    condition?: string;
    availability?: string;
    search?: string;
  }
): InventoryItem[] {
  let filtered = [...items];

  if (filters.search) {
    const lowerQuery = filters.search.toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }

  if (filters.category && filters.category !== "All") {
    filtered = filtered.filter((item) => item.category === filters.category);
  }

  if (filters.condition && filters.condition !== "All") {
    filtered = filtered.filter((item) => item.condition === filters.condition);
  }

  if (filters.availability && filters.availability !== "All") {
    filtered = filtered.filter(
      (item) => item.availability === filters.availability
    );
  }

  return filtered;
}
