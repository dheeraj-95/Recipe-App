const months = [
	'Jan', 
	'Feb', 
	'Mar', 
	'Apr', 
	'May', 
	'Jun', 
	'Jul',
	'Aug',
	'Sep', 
	'Oct', 
	'Nov', 
	'Dec'
];

const formatDate = date => {
	const d = new Date(date)

  const day = d.getDate()
  const month = months[d.getMonth()]

  return `${day} ${month}`
}

export default formatDate