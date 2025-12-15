import type { StopLookup } from "../models/stopLookup/StopLookup";

const stopContainer = document.getElementById("stopContainer");

export const createHtmlForStop = (stopLookup: StopLookup) => {
    if (!stopContainer) return;
    stopContainer.innerHTML = "";

    const name = document.createElement("p");
    name.innerHTML = stopLookup.name;

    stopContainer.appendChild(name);
}