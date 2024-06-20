export async function fetchRepositories() {
    const response = await fetch("http://localhost:3002/repositories");
    return await response.json();
}

export async function fetchComponents() {
    const response = await fetch("http://localhost:3002/components");
    return await response.json();
}
