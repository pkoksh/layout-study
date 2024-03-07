import IBSheetLoader from "@ibsheet/loader";
import { useRef, useEffect } from "react";
var IBSHEET = (props) => {
  const sheetDIV = useRef(null);
  useEffect(() => {
    IBSheetLoader.createSheet({
      el: sheetDIV.current,
      options: props.init,
    }).then((sheet) => {});
  }, []);
  return <div ref={sheetDIV}></div>;
};

var Sample1 = () => {
  const options = {
    Def: {
      Col: {
        RelWidth: 1,
      },
    },
    Cols: [
      { Header: "헤더1", Type: "Text", Name: "col1" },
      { Header: "헤더2", Type: "Text", Name: "col2" },
      { Header: "헤더3", Type: "Text", Name: "col3" },
      { Header: "헤더4", Type: "Text", Name: "col4" },
      { Header: "헤더5", Type: "Text", Name: "col5" },
      { Header: "헤더6", Type: "Text", Name: "col6" },
    ],
  };
  return (
    <>
      <IBSHEET init={options}></IBSHEET>
    </>
  );
};
export default Sample1;
