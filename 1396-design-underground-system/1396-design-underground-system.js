
var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.travelTime = new Map();   
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, {stationName, t});
    // console.log(`Customer ${id} checked in at ${stationName} at time ${t}`);
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    //confirms the id has beencheckedIn
    if(!this.checkIns.has(id)) return;
    //destructure the keys in checkIns cos i want to use it to find the difference in time
    const {stationName: station1, t: time1} = this.checkIns.get(id);
    //deletes the id from checkIn
    this.checkIns.delete(id);
    
    const route = `${station1} -> ${stationName}`;
    const travelTime = t - time1;
    
    if(!this.travelTime.has(route)){
        this.travelTime.set(route, {totalTime: 0, tripCount: 0});
    }
    
    const stat = this.travelTime.get(route);
    stat.totalTime += travelTime;
    stat.tripCount++;
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = `${startStation} -> ${endStation}`;
    if(!this.travelTime.has(route)) return;
    const {totalTime, tripCount} = this.travelTime.get(route);
    return totalTime/tripCount;
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */