import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiY3ViYW5iZWFyZGVkbGFkeSIsImEiOiJja2h1dWZ6Y3QwemZ5MnhybTNkZTg4YWh2In0.mxcfq_8FzdmAjt5GZgEy7g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
