for (let i = 1; i < 20; i++) {
    // console.log(i);
    if (i >= 15) {
        break
    }
}

// continue
for (let i = 1; i < 20; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}