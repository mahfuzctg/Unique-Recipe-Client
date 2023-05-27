import { useEffect } from "react";

const dynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title}  - Unique Recipe`;
  }, [title]);
};
export default dynamicTitle;
