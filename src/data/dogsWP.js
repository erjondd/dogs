const API_BASE = "https://ergji.com/wp-json/wp/v2";

/**
 * Fetch all dogs
 */
export async function getAllDogs() {
    const response = await fetch(`${API_BASE}/dog`);
    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }
    return await response.json();
}

export async function getAllParents(id) {
    const response = await fetch(`${API_BASE}/parent/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }
    return await response.json();
}
/**
 * Fetch a dog by ID
 */
export async function getDogById(id) {
    const response = await fetch(`${API_BASE}/dog/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch dog with ID ${id}`);
    }
    return await response.json();
}