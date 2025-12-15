import { journeyPlanner, stopLookup } from './services/locationService'
import './style.css'
import { createHtmlForStart } from './utils/htmlStart';
import { createHtmlForStop } from './utils/htmlStop';

document.getElementById("startForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const startInput = document.getElementById("startInput");

    let searchText = "";
    if (startInput) {
        searchText = (startInput as HTMLInputElement).value;
    }
    
    const start = await journeyPlanner();

    createHtmlForStart(start);

    if (startInput) {
        (startInput as HTMLInputElement).value = "";
    }
});

const start = await journeyPlanner();
console.log(start);




document.getElementById("stopForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const stopInput = document.getElementById("stopInput");

    let searchText = "";
    if (stopInput) {
        searchText = (stopInput as HTMLInputElement).value;
    }
    
    const stop = await stopLookup(searchText);
    
    createHtmlForStop(stop[0]);

    if (stopInput) {
        (stopInput as HTMLInputElement).value = "";
    }
});

