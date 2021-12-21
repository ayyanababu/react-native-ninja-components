// main index.js

import { requireNativeComponent } from "react-native";
import NCButton from "./src/components/Inputs/Button";

const NCNinjaComponents = requireNativeComponent("NCNinjaComponents", null);

export { NCNinjaComponents, NCButton };
