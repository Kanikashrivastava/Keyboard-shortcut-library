
const colors = ['red', 'blue', 'green', 'peach', 'White',	'Orange',	'Maroon','Yellow',	'Lime', 'Salmon',	'Crimson', 'Aqua','grey','Purple','Mustard','violet',	'magenta',	'coral'	];
export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}