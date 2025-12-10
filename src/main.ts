import { getLocation } from './services/locationService';
import './style.css'

document.getElementById("mainButton")?.addEventListener("click", () => {

  const location = getLocation();
  console.log(location);
});