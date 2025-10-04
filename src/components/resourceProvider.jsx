import { PaginationProvider } from "../hooks/pagination";
import { SearchProvider } from "../hooks/search";

export function ResourceProvider({ children }) {
  return (
    <PaginationProvider>
      <SearchProvider>
        {children}
      </SearchProvider>
    </PaginationProvider>
  );
}