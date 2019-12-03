export default class ModuleConstructor {
    constructor(element, times) {
        const a = new Array(times).fill(element)
        a.forEach(el => {
            console.log(el);
        });
    }
}
