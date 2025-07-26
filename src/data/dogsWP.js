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
export async function getAllParent() {
    const response = await fetch(`${API_BASE}/parent/`);
    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }
    console.log(response, "reponse")
    return await response.json();
}
export async function getAllAdoption() {
    const response = await fetch(`${API_BASE}/adoption/`);
    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }
    console.log(response, "reponse")
    return await response.json();
}
/**
 * Fetch all parents of a dog by its ID
 * @param {number} id - The ID of the dog
 * @return {Promise<Array>} - A promise that resolves to an array of parent dogs
 * @throws {Error} - Throws an error if the fetch fails
 */
export async function getAllParents(id) {
    const response = await fetch(`${API_BASE}/parent/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch dogs");
    }
    console.log(response, "reponse")
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