// Mounts
import MountConstructor from './mount-constructor';
import MountFunction from './mount-function';
 
// Components
import ModuleConstructor from './module-constructor'
import ModuleFunction from './module-function';

const runTimes = 10000;
const nodes = 9000000;

testConstructor = (name) => {
    const start = performance.now()
    MountConstructor('.test-subject', ModuleConstructor, runTimes);
    const stop = performance.now();
    return stop - start;
}

testFunction = (name) => {
    const start = performance.now()
    MountFunction('.test-subject', ModuleFunction, runTimes);
    const stop = performance.now();
    return stop - start;
}

showResults = (...results) => {
    const resultContainer = document.querySelector('.resultContainer');
    for(const result of results) {
        const li = document.createElement('li');
        let avarage = 0;
        for(const time of result) {
            avarage += time;
        }
        li.innerHTML = `Total results: ${result.length}. Avarage: ${avarage/runTimes}`;
        resultContainer.appendChild(li);
    }
}

const testSubjectContainer = document.querySelector('.test-subjects');
const testSubject = testSubjectContainer.querySelector('.test-subject');
const button = document.querySelector('.run-test'); 

button.addEventListener('click', () => {
    const resultDryrun = [];
    const resultConstructor = [];
    const resultFunction = [];
    
    // Create testnodes
    for(let i = 0; i < nodes; i+=1) {
        const duplicate = testSubject.cloneNode(true);
        testSubjectContainer.appendChild(duplicate);
    }

    // Dryrun to warmup
    for(let i = 0; i < runTimes; i +=1) {
        resultDryrun.push(testConstructor("Dryrun"));
    }
    // Run test
    for(let i = 0; i < runTimes; i +=1) {
        resultConstructor.push(testConstructor("ModuleConstructor"));
    }

    for(let i = 0; i < runTimes; i +=1) {
        resultFunction.push(testFunction("ModuleFunction"));
    }

    // Clean
    const testSubjectsAll = testSubjectContainer.querySelectorAll('.test-subject');
    for(const testSubject of testSubjectsAll) {
        testSubjectContainer.removeChild(testSubject);
    }

    // Show results
    showResults(resultConstructor, resultFunction);
});

