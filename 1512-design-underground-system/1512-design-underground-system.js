
var UndergroundSystem = function() {
    this.checkIns = new Map();
    this.travelDetails = new Map();
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
   this.checkIns.set(id, {stationName, t});
   console.log(this.checkIns);
    
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if(!this.checkIns.get(id)){
        return;
    }
    const {stationName: startStationName , t:checkInTime } = this.checkIns.get(id);
    this.checkIns.delete(id);

    const route  = `${startStationName} -> ${stationName}`;
    const timeTaken = t - checkInTime;

    if(!this.travelDetails.has(route)){
        this.travelDetails.set(route, {timeTakenToGetToDestination : 0, numberOfTimesRouteWasTaken : 0})
    }

    const details = this.travelDetails.get(route);
    details.timeTakenToGetToDestination += timeTaken;
    details.numberOfTimesRouteWasTaken++;
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = `${startStation} -> ${endStation}`;
    if(!this.travelDetails.has(route)){
        return;
    }
    const{ timeTakenToGetToDestination, numberOfTimesRouteWasTaken} = this.travelDetails.get(route);
    return timeTakenToGetToDestination/numberOfTimesRouteWasTaken;
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */