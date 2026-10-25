//Declare Global variable

const browserVersion = 'Chrome'
console.log(browserVersion);

function getBrowserVersion(){

    if(browserVersion=='Chrome')
    {   
        //var browserVersion = 'chrome 2'
        let browserVersion = 'chrome2'
        console.log('I am inside the block and my browserVersion is ',browserVersion);
    }

    console.log('I am outside the block and my browserVersion is ',browserVersion);

}

getBrowserVersion()
console.log('I am outside the function and my browserVersion is ',browserVersion);