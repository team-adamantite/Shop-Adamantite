// Returns path data for a rectangle with rounded right corners.
// The top-left corner is ⟨x,y⟩.
const rightRoundedRect = (
  x,
  y,
  width,
  height,
  radius,
  topLeft = false,
  topRight = true,
  bottomLeft = false,
  bottomRight = true
) => {
  let output = `M ${x + radius},${y}`;
  output += `h${width - 2 * radius}`;

  if (topRight) {
    output += `a${radius},${radius} 0 0 1 ${radius},${radius}`;
  } else {
    output += `h${radius}`;
    output += `v${radius}`;
  }

  output += `v${height - 2 * radius}`;

  if (bottomRight) {
    output += `a${radius},${radius} 0 0 1 ${-radius},${radius}`;
  } else {
    output += `v${radius}`;
    output += `h${-radius}`;
  }

  output += `h${2 * radius - width}`;

  if (bottomLeft) {
    output += `a${radius},${radius} 0 0 1 ${-radius},${-radius}`;
  } else {
    output += `h${-radius}`;
    output += `v${-radius}`;
  }

  output += `v${2 * radius - height}`;

  if (topLeft) {
    output += `a${radius},${radius} 0 0 1 ${radius},${-radius}`;
  } else {
    output += `v${-radius}`;
    output += `h${radius}`;
  }

  output += 'z';
  return output;
};

export default rightRoundedRect;
