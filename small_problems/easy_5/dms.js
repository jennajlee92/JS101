// conversion:
// float = non-decimal + (minutes * 1/60) + (seconds * 1/60 * 1/60)
// float - non-decimal = (minutes * 1/60) + (seconds * 1/60 * 1/60)

function dms(number) {
  let integer = Math.floor(number);
  let decimal = number - integer;
  let minutes = Math.floor(decimal * 60);
  let seconds = Math.floor(((decimal * 60) - minutes) * 60);
  console.log(`${integer}°${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"