export default function MountFunction(className, Module, times) {
    const targets = document.getElementsByClassName(className);
    var module = new Module(className);
    for (let i = (targets.length - 1); i >= 0; i -= 1) {
        module.func(targets[i], times);
    }
}