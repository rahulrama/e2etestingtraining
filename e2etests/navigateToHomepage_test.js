Feature('navigateToAEVIDev');

Scenario('navigate to the AEVI developer homepage', (I) => {
    I.amOnPage('https://developer.aevi.com/');
    I.see('Let’s create an awesome merchant experience'); 
    // broken test on purpose - fix it!
});

Scenario('navigate to the sign up page', (I) => {
    I.amOnPage('https://developer.aevi.com/');
    I.click('Sign up');
    I.see('Terms of Use for AEVI Websites'); 
});
