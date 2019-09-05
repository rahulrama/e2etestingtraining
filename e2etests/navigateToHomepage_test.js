Feature('navigateToAEVIDev');

Scenario('navigate to the AEVI developer homepage', (I) => {
    I.amOnPage('https://developer.aevi-test.com/');
    I.see('Let’s create a better merchant experience'); 
    // broken test on purpose - fix it!
});

Scenario('navigate to the AEVI developer homepage', (I) => {
    I.amOnPage('https://developer.aevi-test.com/');
    I.click('Sign up');
    I.see('Terms of Use for AEVI Websites'); 
});