import { PaginationProvider } from "../hooks/pagination";
import { SearchProvider } from "../hooks/search";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

export function ResourceProvider({ children }) {
  return (
    <PermanentDrawerLeft>
      <PaginationProvider>
        <SearchProvider>
          {children}
        </SearchProvider>
      </PaginationProvider>
    </PermanentDrawerLeft>
  );
}