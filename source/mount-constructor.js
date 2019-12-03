export default function MountConstructor(className, Module, times) {
    const targets = document.getElementsByClassName(className);

    for (let i = (targets.length - 1); i >= 0; i -= 1) {
        new Module(targets[i], times);
    }
}
