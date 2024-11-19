

function DollarFormatter(value: number | null): string {
    if (value != null) {
        return "$" + value.toFixed(2);  // Adding toFixed(2) for formatting to 2 decimal places
    }
    return "";
}

function generateStyleNo(): string {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000; // Generates a random 5-digit number
    return `StyleNo-${randomNumber}`;
  }


export { DollarFormatter, generateStyleNo };