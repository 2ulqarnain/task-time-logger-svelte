export const removeCharByIndexFromString = (string: string, index: number) => {
	console.log(string, index);
	let tempString = string;
	for (let i = 0; i < string.length; i++) {
		console.log(tempString[i]);
	}
};

export const withLeadingZero = (num: number) =>
	Intl.NumberFormat('en-pk', { minimumIntegerDigits: 2 }).format(num);

export function returnFormattedDateTime(date: Date) {
	const hours = withLeadingZero(date.getHours());
	const minutes = withLeadingZero(date.getMinutes());
	const monthDate = withLeadingZero(date.getDate());
	const month = withLeadingZero(date.getMonth() + 1);
	const year = date.getFullYear();
	return `${hours}:${minutes} ${monthDate}-${month}-${year}`;
}
