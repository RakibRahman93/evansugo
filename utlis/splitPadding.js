export const splitPadding = ()=>{
     const addPaddingLeft = () => {
      document.getElementById("paddingLeft")?.style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer")?.offsetWidth) /
        2
      }px`;
    };
    const addPaddingRight = () => {
      document.getElementById("paddingRight")?.style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer")?.offsetWidth) /
        2
      }px`;
    };
    addPaddingLeft();
    addPaddingRight();
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
}