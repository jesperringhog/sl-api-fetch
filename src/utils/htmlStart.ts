import type { JourneyPlanner } from "../models/journeyPlanner/JourneyPlanner";

const startContainer = document.getElementById("stopContainer");

export const createHtmlForStart = (journeyPlanner: JourneyPlanner) => {
    if (!startContainer) return;
    startContainer.innerHTML = "";

    const name = document.createElement("p");
    name.innerHTML = journeyPlanner.legs[0].origin.name;

    startContainer.appendChild(name);
}