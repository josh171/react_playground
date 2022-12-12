import FastfoodIcon from "@mui/icons-material/Fastfood";
import PaidIcon from "@mui/icons-material/Paid";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import EventIcon from "@mui/icons-material/Event";
import { BalanceType } from "./TypesAndStates";
import { blue, green, orange, purple } from "@mui/material/colors";

export function returnTransactionIcon(balance_type: BalanceType) {
  switch (balance_type.toLowerCase()) {
    case "leisure":
      return <SelfImprovementIcon sx={{ color: purple[500] }} />;
    case "food":
      return <FastfoodIcon sx={{ color: orange[500] }} />;
    case "utility":
      return <EventIcon sx={{ color: blue[500] }} />;
    default:
      return <PaidIcon sx={{ color: green[500] }} />;
  }
}
