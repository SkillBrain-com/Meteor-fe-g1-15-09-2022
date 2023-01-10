export const getElementColorFromClicks = (clicks) => {
    if (clicks > 10) {
        return 'red-bg';
    }

    if (clicks > 5) {
        return 'orange-bg';
    }

    return 'green-bg';
}
