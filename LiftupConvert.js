export function toCelcius(farenheit) {
    return (farenheit - 32) *5 / 9;
}
export function toFarenheit(celcius) {
    return (celcius * 9 / 5)+32;
}
export function TryConvert(temprature, convert) {
    const input = parseFloat(temprature);
    if (Number.isNaN(input)) { return ""; }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}