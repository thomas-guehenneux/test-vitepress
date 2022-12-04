export default class Util {
    // return the first visible element by tag name
    static findElement(element, tagName) {
        const candidates = element.getRootNode().firstChild.getElementsByTagName(tagName);
        for (let i = 0;i < candidates.length;++i) {
            const candidate = candidates[i];
            if (Util.isVisible(candidate)) {
                return candidate;
            }
        }
    }

    static isVisible(element) {
        let p = element;
        while (p) {
            if (p.style.display === 'none' || p.style.visibility === 'hidden') {
                return false;
            }
            p = p.parentElement;
        }
        return true;
    }
}