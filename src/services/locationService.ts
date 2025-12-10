export const getLocation = async () => {
    const response = await fetch("https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any");
    const data: slResponse = response.json();
    return data;
}