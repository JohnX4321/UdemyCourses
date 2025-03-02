/*
 * Coding Exercise: Task Scheduler
A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.
 */

var leastInterval = function(tasks, n) {
    //Write code here
    let counter=new Array(26).fill(0);
    let maxVal=0;
    let numTasks = 0;

    tasks.forEach(task => {
        let ixTask = task.charCodeAt(0)-'A'.charCodeAt(0);
        counter[ixTask]++;
        if (maxVal===counter[ixTask])
            numTasks++;
        else if (maxVal<counter[ixTask]){
            maxVal=counter[ixTask];
            numTasks=1;
        }
    })

    let parts=maxVal-1;
    let slotsPerPart=n-(numTasks-1);
    let emptySlots=parts*slotsPerPart;
    let availableTasks=tasks.length-maxVal*numTasks;
    let idles=Math.max(0,emptySlots-availableTasks);
    return tasks.length+idles;
};