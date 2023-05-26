import { useEffect } from "react";

const dynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  - Cooking Toys`;
  }, [title]);
};
export default dynamicTitle;
