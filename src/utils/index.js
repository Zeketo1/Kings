export const scrollToElementWithOffset = (selector, offset = 50) => {
    const element = document.querySelector(selector);
    if (element) {
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    }
};
