export function mapAssetsToOptions(assets) {
  return assets?.map(({ code, image }) => ({ value: code, label: code, imgSrc: image }));
}

export function isNumber(value) {
  return /^[\s]*(\d+(\.\d*)?)?$/.test(value);
}
