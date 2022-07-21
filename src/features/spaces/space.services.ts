/* eslint-disable camelcase */
import axios from "axios";
import moment from "moment";
import RocketPreparedData, { SpaceDocument } from "./space.interfaces";

const url: string = "https://api.spacexdata.com/v3/launches";

// Preparing Data
const getPreparedData = (spaces: SpaceDocument[]) =>
  spaces.map((space) => {
    const {
      flight_number = 0,
      mission_name = "",
      launch_year = "",
      rocket = { rocket_id: "", rocket_name: "", rocket_type: "" },
      launch_date_local = "",
      launch_success = false,
      launch_date_unix = "",
      links = {
        mission_patch: "",
      },
      details = "",
    } = space;

    const { rocket_id = "", rocket_name = "", rocket_type = "" } = rocket;

    const { mission_patch = "" } = links;

    return {
      flightNumber: flight_number,
      missionName: mission_name,
      launchYear: launch_year,
      launchDateUnix: moment(launch_date_unix).startOf("day").fromNow(),
      rocket: {
        rocketId: rocket_id,
        rocketName: rocket_name,
        rocketType: rocket_type,
      },
      launchDate_local: moment(launch_date_local).format("MMM Do YY"),
      launchSuccess: launch_success,
      links: {
        missionPatch: mission_patch,
      },
      details,
    };
  });

const getSpaces = async () => {
  const response = await axios.get<SpaceDocument[]>(url);
  const preparedData: RocketPreparedData[] = getPreparedData(response.data);

  return preparedData;
};

const SpaceServices = {
  getSpaces,
};

export default SpaceServices;
