import { useEffect, useState } from "react";

export const useTitle = (initialTitle: string) => {
    const [title, setTitle] = useState(initialTitle);
  
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      if(htmlTitle){
        htmlTitle.innerHTML
      }
    };
  
    useEffect(updateTitle, [title]);
  
    return setTitle;
  };