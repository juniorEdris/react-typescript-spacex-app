interface Payloads {
  payload_id: string;
  norad_id: [];
  reused: boolean;
  customers: [string];
  nationality: string;
  manufacturer: string;
  payload_type: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  orbit: string;
}

interface OrbitParams {
  reference_system: string;
  regime: string;
  longitude: string | null;
  semi_major_axis_km: string | null;
  eccentricity: string | null;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: string | null;
  lifespan_years: string | null;
  epoch: string | null;
  mean_motion: string | null;
  raan: string | null;
  arg_of_pericenter: string | null;
  mean_anomaly: string | null;
}

interface Cores {
  core_serial: string;
  flight: number;
  block: string | null;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  land_success: string | boolean;
  landing_intent: boolean;
  landing_type: string | null;
  landing_vehicle: string | null;
  orbit_params: OrbitParams;
}

interface Fairings {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ship: null | string;
}

interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

interface LaunchFailureDetails {
  time: number;
  altitude: string | null;
  reason: string;
}

interface Links {
  mission_patch: string | null;
  mission_patch_small: string | null;
  reddit_campaign: string | null;
  reddit_launch: string | null;
  reddit_recovery: string | null;
  reddit_media: string | null;
  presskit: string | null;
  article_link: string | null;
  wikipedia: string | null;
  video_link: string | null;
  youtube_id: string | null;
  flickr_images: [];
}

// Stages
interface RocketFirstStage {
  cores: Cores[];
}

interface RocketSecondStage {
  block: number;
  payloads: Payloads[];
}

interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: RocketFirstStage;
  second_stage: RocketSecondStage;
  fairings: Fairings;
  ships: [];
  telemetry: {
    flight_club: null | "";
  };
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_failure_details: LaunchFailureDetails;
  links: Links;
  details: string | null;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number;
  timeline: {
    webcast_liftoff: number;
  };
  crew: null | string;
}

export interface SpaceDocument {
  flight_number: number;
  mission_name: string;
  upcoming: boolean;
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: Rocket;
}

export interface StateData {
  data: SpaceDocument[];
}

/*

"details": "Engine failure at 33 seconds and loss of vehicle",
  "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
  "static_fire_date_unix": 1142553600,
  "timeline": {
    "webcast_liftoff": 54
  },
  "crew": null
*/
