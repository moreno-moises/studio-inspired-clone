import { useEffect } from "react";

export const usePageTitle = (page?: string) => {
  useEffect(() => {
    document.title = page ? `${page} | Moshe` : "Moshe";
  }, [page]);
};
