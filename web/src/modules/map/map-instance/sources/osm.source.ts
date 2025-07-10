import { RasterSourceSpecification } from 'maplibre-gl';

/**
 *
 * Creates a raster source with given urls and a attribution for osm. If no urls are given, osm default xyz tiles are used.
 */
export const createOsmSource = (urls?: string[]): RasterSourceSpecification => {
  return {
    type: 'raster',
    tiles: urls ?? ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
    tileSize: 256,
    minzoom: 0,
    maxzoom: 19,
    attribution:
      '<a href="https://www.openstreetmap.org" target="_blank">© OpenStreetMap contributors</a>',
  } as RasterSourceSpecification;
};
