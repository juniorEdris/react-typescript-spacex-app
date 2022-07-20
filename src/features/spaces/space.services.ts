import axios from "axios";
import { SpaceDocument } from "./space.interfaces";

const url: string = "https://api.spacexdata.com/v3/launches";

const getSpaces = async () => {
  const response = await axios.get<SpaceDocument[]>(url);

  return response;
};

const SpaceServices = {
  getSpaces,
};

export default SpaceServices;
