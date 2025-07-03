function sort(width: number, height: number, length: number, mass: number): string {
    const volume = width * height * length;
    const isBulky = volume >=1000000 || width >= 150 || height >= 150 || length >= 150;
    const isHeavy = mass >= 20;

    if (isHeavy && isBulky) {
        return "REJECTED";
    } else if (isHeavy || isBulky) {
        return "SPECIAL";
    } else {
        return "STANDARD";
    }
}

console.log(sort(100, 100, 100, 10));
console.log(sort(150, 150, 150, 15));
console.log(sort(100, 100, 100, 25));
console.log(sort(200, 200, 200, 30));
console.log(sort(50, 50, 50, 5));