// Helper function to get the correct asset path with base URL
export const getAssetPath = (path) => {
  // Get base URL from Vite (includes trailing slash, e.g., "/Echos-of-Us-Desktop/")
  const base = import.meta.env.BASE_URL || "/";
  // Remove leading slash from path if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Combine base URL with path
  return `${base}${cleanPath}`;
};
