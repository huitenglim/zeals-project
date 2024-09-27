export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomFloatingNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

export const randomDate = (start: Date, end: Date) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString(); // Format to YYYY-MM-DDTHH:MM:SSZ
};

export const randomItemName = (): string => `Cotton T-shirt ${randomNumber(100, 999)}`;

export const randomPrice = (): number => parseFloat(randomFloatingNumber(10.99, 100.99).toFixed(2));

export const randomTitle = (): string => `Some Title ${randomNumber(100, 999)}`;