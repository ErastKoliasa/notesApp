export function extractDates(content) {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return content.match(dateRegex) || [];
}

export function showElement(element) {
    element.classList.remove("hidden");
}

export function hideElement(element) {
    element.classList.add("hidden");
}