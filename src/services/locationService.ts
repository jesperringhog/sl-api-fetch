import type { JpResponse } from "../models/journeyPlanner/JlResponse";
import type { SlResponse } from "../models/stopLookup/SlResponse";
import { get } from "./serviceBase";

const urlBase = "https://journeyplanner.integration.sl.se/v2/";


export const journeyPlanner = async () => {
    const response = await get <JpResponse>(`${urlBase}trips?type_origin=any&type_destination=any&name_origin=9091001000009182&name_destination=9091001000009192&calc_number_of_trips=3`);
    return response.journeys[0];
}


export const stopLookup = async (searchText: string) => {
    const response = await get <SlResponse>(`${urlBase}stop-finder?name_sf=${searchText}&any_obj_filter_sf=2&type_sf=any`);
    return response.locations;
}

