function HongKong(rangeLow, rangeHigh) {
    for (var counter = rangeLow; counter <= rangeHigh; counter++) {
        var remainder3 = counter % 3;
        var remainder5 = counter % 5;
        if (remainder3 == 0 && remainder5 == 0) {
            console.log('Hong Kong');
        } else if (remainder3 == 0) {    
            console.log('Hong');
        } else if (remainder5 == 0) {
            console.log('Kong');
        } else {
            console.log(counter);
        } 
    }   
}


HongKong(1, 30)