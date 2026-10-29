let browserName = "Firefox";

function launchBrowser(browserName)
{

    if(browserName === "Chrome")
    {
        console.log('My browser name is chrome');
        
    }
    else
        {
            console.log(`My browser name is ${browserName}`);
        }

}

launchBrowser(browserName);


let testType = 'smoke'

function runTest(testType){
switch (testType) {
    case 'smoke':
        console.log('Smoke testing')
        break;

        case 'regression':

        console.log('Regression Testing')
        
        break;

        case 'sanity':

        console.log('Sanity Testing')
        
        break;

        default:

        console.log('Invalid testing')

        break;
}
}

runTest(testType);