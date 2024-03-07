import "./App.css";
import { Layout, Model } from "flexlayout-react";
import "flexlayout-react/style/light.css";
import Sample1 from "./component/sample1";
var json = {
  global: {
    splitterSize: 40,
    tabSetEnableClose: true,
    tabSetHeaderHeight: 100,
    // tabSetTabStripHeight: 1,
  },
  borders: [],
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 20,
        children: [
          {
            type: "tab",
            name: "One",
            component: "button",
          },
        ],
      },
      {
        type: "tabset",
        weight: 80,
        children: [
          {
            type: "tab",
            name: "Two",
            component: "button",
          },
          {
            type: "tab",
            name: "Three",
            component: "sample1",
          },
        ],
      },
    ],
  },
};

const model = Model.fromJson(json);

function App() {
  const factory = (node) => {
    var component = node.getComponent();

    if (component === "button") {
      return <button>{node.getName()}</button>;
    } else if (component === "sample1") {
      return <Sample1></Sample1>;
    }
  };

  return <Layout model={model} factory={factory} />;
}

export default App;
