/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let maxDay = 0;
    for(let event of events){
        maxDay = Math.max(maxDay, event[1]);
    }
    let totalEvent = 0;
    event = events.sort((a,b) => a[0] - b[0]);
    const pq = new MinPriorityQueue();
    for(let day = 1, j = 0; day <= maxDay; day++){
        while(j < events.length && events[j][0] <= day){
            pq.enqueue(events[j][1]);
            j++;
        }
        while(!pq.isEmpty() && pq.front() < day){
            pq.dequeue();
        }
        if(!pq.isEmpty()){
            pq.dequeue();
            totalEvent++;
        }
    }
    return totalEvent;
};