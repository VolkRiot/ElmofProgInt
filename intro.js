// H index is a measure such that a researcher has published h papers that have been cited atleast h times.
// Find the largest h-index.

let start = [1, 4, 1, 4, 2, 1, 3, 5, 6];

function getH(orgArr) {
  var sorted = orgArr.sort((a, b) => b - a);

  for (var i = 0; i < sorted.length; i++) {
    var valueAt = sorted[i];

    var adjustedAt = valueAt - 1;

    var seen = adjustedAt - i;
    var endIndex = i + seen;

    if (sorted[endIndex] >= valueAt) {
      console.log(`H-index value found and it is ${valueAt}`);
      break;
    }
  }
}
