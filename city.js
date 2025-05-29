class City {
    constructor(name, distance, circlePos, namePos,weight = 0, profit = 0) {
        this.name = name;
        this.distance = distance;
        this.circlePos = circlePos;
        this.namePos = namePos;
        this.weight = weight;
        this.profit = profit
    }

    getNamePos(){
        return this.namePos;
    }

    setNamePos(namePos){
        this.namePos = namePos;
    }

    getProfit(){
        return this.profit;
    }

    setProfit(profit){
        this.profit = profit;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDistance(n) {
        return this.distance[n];
    }

    getDistances() {
        return this.distance;
    }

    setDistances(distance){
        this.distance = distance;
    }
    
    getCirclePosition() {
        return this.circlePos;
    }

    setCirclePosition(circlePos){
        this.circlePos = circlePos;
    }

    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight = weight;
    }
}