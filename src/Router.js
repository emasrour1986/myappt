import { createStackNavigator } from "react-navigation";
import Landing from "./Landing";
import A from "./A";
import B from "./B";
import flat from "./flat";
import pick from "./pick";
import Calculator from "./Calculator";
const RootStack = createStackNavigator(
  {
    _Landing: Landing,
    _A: A,
    _B: B,
    _flat: flat,
    _Calculator: Calculator,
    _pick: pick
  },
  {}
);

export default RootStack;
