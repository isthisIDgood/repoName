var yearList = [1800, 1900, 1999, 2000, 2001, 2002, 2003, 2000, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];

function leapYear(year){
    if(year % 4 ===0){
        if(year  % 100 === 0){
            if(year % 400 ===0){
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

for(var i = 0; i < yearList.length; i++){
    console.log(yearList[i],leapYear(yearList[i]));
}