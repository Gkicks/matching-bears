# Matching Bears

Matching Bears is a game website.

This website is designed for the user to play a matching pairs game.

![am-i-responsive](assets/readme-images/am-i-responsive.png)

Visit the deployed site here: [Matching Bears](https://gkicks.github.io/matching-bears/)

# Contents

- [Matching Bears](#matching-bears)
- [Contents](#contents)
- [User Experience (UX)](#user-experience-ux)
  - [Initial Discussion](#initial-discussion)
    - [Key Information for the Site](#key-information-for-the-site)
  - [User Stories](#user-stories)
    - [Client Goals](#client-goals)
    - [Visitor Goals](#visitor-goals)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
  - [Typography](#typography)
  - [Imagery](#imagery)
    - [Favicon](#favicon)
    - [Card Images](#card-images)
  - [Wireframes](#wireframes)
    - [Landing Page](#landing-page)
    - [Main Page](#main-page)
    - [End Page](#end-page)
- [Features](#features)
  - [Existing Features](#existing-features)
    - [The Landing Page](#landing-page-1)
    - [The Main Page](#main-page-1)
    - [The End Page](#end-page-1)
    - [404.html](#404html)
  - [Future Implementations](#future-implementations)
  - [Accessibility](#accessibility)
    - [Wave Validator](#wave-validator)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, libraries and programs used](#frameworks-libraries-and-programs-used)
- [Deployment and Local Development](#deployment-and-local-development)
  - [Deployment](#deployment)
  - [Local Development](#local-development)
    - [How to Fork](#how-to-fork)
    - [How to Clone](#how-to-clone)
- [Testing](#testing)
  - [Automated Testing](#automated-testing)
  - [WC3 Validator](#wc3-validator)
  - [JShint Validator](jshint-validator)
  - [Lighthouse](#lighthouse)
    - [Index.html](#indexhtml-1)
      - [Desktop](#desktop-1)
      - [Mobile](#mobile-1)
    - [404.html](#404html-1)
      - [Desktop](#desktop-2)
      - [Mobile](#mobile-2)
  - [Testing User Stories](#testing-user-stories)
    - [Client Goals](#client-goals-1)
    - [Visitor Goals](#visitor-goals-1)
  - [Full Testing](#full-testing)
    - [Landing Page](#landing-page-2)
    - [Main Page](#main-page-2)
    - [End Page](#end-page-2)
    - [404 Page](#404-page)
  - [Bugs](#bugs)
    - [Resolved Bugs](#resolved-bugs)
    - [Unresolved Bugs](#unresolved-bugs)
- [Credits](#credits)
  - [Code Used](#code-used)
  - [Content](#content)
  - [Media](#media)
  - [Other](#other)
  - [Acknowledgements](#acknowledgements)

[Back to top](#matching-bears)

# User Experience (UX)

## Initial Discussion

Matching Bears is a game playing website. The name Matching Bears is a wordplay on the well known game, Matching Pairs. The website is user-friendly and easy to navigate, giving the user a smooth game playing experience

### Key Information for the Site

- How to play instructions
- Game playing area
- Statistics about the user’s game – time taken and number of flips

## User Stories

### Client Goals

- To be responsive on a range of devices
- The game to have different difficulty levels
- Statistics of the game to be displayed
- Have a link to a bears charity

### Visitor Goals

- To be able to easily navigate the website
- Understand the features of the website
- To have an enjoyable game playing experience
- To have the option of sound during the game but to be able to mute this
- To be rewarded when they have won the game
- To be able to play the game at different difficulty levels
- To be able to see their game playing statistics
- To have the opportunity to donate to a charity relating to bears

[Back to top](#matching-bears)

# Design

## Colour Scheme

- Five colours have been used throughout the website - #F6F4F3, #D5BDA9, #BA9D8C, #4C3B32 and #312C2D
- The brown colours were taken from a colour pallette from the website, Coolors and were chosen as the brown reflects the bear theme

![Coolers brown colour image](assets/readme-images/coolers-img-1.png)

- I wanted the white to be an off white, to make the website easier on the eye, so used the #F6F4F3 colour I used in my last project. This colour compliments the brown pallette chosen

![Coolers cream colour image](assets/readme-images/coolers-img-2.png)

## Typography

- I used Fontjoy, a font pairing website, to help me make font choices. I selected Laila and Playfair Display as I felt that these reflected the game.

![fonjoy screenshot](assets/readme-images/fontjoy.png)

- To give the audio button a picture of a speaker I took icons from the website https://fontawesome.com/icons

## Imagery

### Favicon

- • I used a picture of a bear for my favicon. I chose this image as it’s a simple but very classic bear face. This image was taken from pixabay.com

![favicon](assets/readme-images/favicon.png)

### Card Images

- These images were all found on the website pixabay.com. There are eight different images, for the sixteen game cards, as there is a pair of each

| Card Description |                        Card Image                        |
| :--------------: | :------------------------------------------------------: |
|   Yellow Bear    |   ![Yellow Bear](assets/readme-images/yellow-bear.png)   |
|  Confused Bear   | ![Confused Bear](assets/readme-images/confused-bear.png) |
|    Blue Bear     |     ![Blue Bear](assets/readme-images/blue-bear.png)     |
|    Brown Bear    |    ![Brown Bear](assets/readme-images/brown-bear.png)    |
|    Scary Bear    |    ![Scary Bear](assets/readme-images/scary-bear.png)    |
|    Panda Bear    |    ![Panda Bear](assets/readme-images/panda-bear.png)    |
|    Mouse Bear    |    ![Mouse Bear](assets/readme-images/mouse-bear.png)    |
|    Koala Bear    |    ![Koala Bear](assets/readme-images/koala-bear.png)    |

## Wireframes

- Wireframes were created using figma.com
- The website was designed to be the same across desktop and mobile

### Landing Page

![wireframe screenshot for landing page](assets/readme-images/wireframe-start-page.png)

### Main Page

![wireframe screenshot for main page](assets/readme-images/wireframe-main-page.png)

### End Page

![wireframe screenshot for end page](assets/readme-images/wireframe-end-page.png)

View desktop wireframes on the Figma site: [Desktop](https://www.figma.com/file/4lZLQQasf5A6YJlC5U2uab/Matching-Bears?type=design&node-id=0%3A1&mode=design&t=1eOShOXN4bQ49Ew7-1)

[Back to top](#matching-bears)

# Features

## Existing Features

### The Landing Page

![screenshot of landing page](assets/readme-images/landing-page.png)

- The landing page is the page the user lands on when the website is first loaded
- There is a ‘How to Play’ area which the user can click on. This expands to give the user instructions on how to play

![screenshot of how to play instructions](assets/readme-images/how-to-play.png)

- The user must enter their name into the ‘enter name’ input before they can proceed to playing the game

![screenshot of how to input](assets/readme-images/input.png)

- The ‘How to Play’ and ‘Start’ button both have styling so that the colour changes when the user hovers. The colours used are the inverse of the original to keep the colour theme consistent

![screenshot of how to play title](assets/readme-images/how-to-play-title.png)

### The Main Page

- The main page is the part of the website where the user will play Matching Bears

![screenshot of main page](assets/readme-images/main-page.png)

#### Audio Button

- There is an audio button so the user can choose whether to have sound on or not. The default is for the sound to be on. The user can click on this button to toggle between sound on and off

![screenshot of audio button](assets/readme-images/audio-button.png)

#### Select Difficulty

- There is an option for the user to select the difficulty, from the values ‘easy’, ‘medium’ and ‘hard’. This will change the amount of time the user has to complete the game. If the ‘easy’ option is selected the user will have 100 seconds, for ‘medium’ they will have 60 seconds and for ‘hard’ they will have 30 seconds
- The default difficulty level is ‘easy’
- The styling for the select changes the colour of it on hover. The styling used is the inverse of the original. This is the same as the hover styling of the buttons to keep the website consistent

![screenshot of select difficulty dropdown](assets/readme-images/select-difficulty.png)

- When the user has clicked a card the select difficulty option is disabled. This is to prevent the user changing this mid game and giving themselves more time

![screenshot of select difficulty disabled](assets/readme-images/select-difficulty-disabled.png)

#### The game container

- This is the focus of the website. There are 16 cards that are randomly generated when the user starts the game

![screenshot of game container](assets/readme-images/game-container.png)

- When the user clicks a card the card will flip. There is an animation to make this resemble a physical card being turned
- When the user clicks the card, if the audio button is not on mute, a card flipping sound will play
- Once a card has been flipped it cannot be flipped back over by the user. This enables the game play to work correctly
- If the user flips two cards, and they are not a match, they will flip back over
- Game play is disabled at this point until the two cards have been flipped back. This prevents the user clicking all the cards quickly so game play can proceed in the correct way
- If the user flips two cards and they do match a match sound will play and these two cards will remain facing upwards

![screenshot of game container with cards showing](assets/readme-images/cards-showing.png)

- When all the cards have been matched there is an animation where the cards wiggle from side to side. This is a visual reward to the user for winning the game

![screenshot of game container with cards wiggling](assets/readme-images/cards-wiggle.png)

#### Time

- The time display counts down, in seconds, as the user plays the game.
- The timer doesn’t start until the user has clicked the first card

![screenshot of time count](assets/readme-images/time-count.png)

#### Restart Button

- This gives the user the option to restart the game at any time.

![screenshot of restart button initial](assets/readme-images/restart-button-initial.png)

- This is styled, on hover, as the other buttons are

![screenshot of restart button on hover](assets/readme-images/restart-button-hover.png)

- When the user clicks this, a confirm alert will be displayed. This is to prevent the user clicking this in error
- The user will click ‘yes’ if they meant to restart and ‘cancel’ if restart was pressed in error

![screenshot of confirm alert](assets/readme-images/confirm.png)

- When the restart button is pressed;
  - The cards will be reshuffled
  - The difficulty selector will no longer be disabled so the user can change the difficulty level – this will default to the difficulty level the user was last playing at. This will be disabled again as soon as the user clicks a card
  - The time count will reset to that of the difficulty level selected. This will not start counting down until the user clicks a card
  - The flips count will reset to zero

#### Flip Count

- The flip count tells the user how many cards they have flipped.
- This increases, by one, each time a card is flipped

![screenshot of flip count](assets/readme-images/flip-count.png)

### End Page

- If the user is able to match all the cards, in the time allowed, a winning message will appear over the main page.
- This will pull the name of the player, which they inputted at the start of the game, the time the player had remining and the number of flips they were able to win the game in

![screenshot of winning message](assets/readme-images/winning-message.png)

- If the player runs out of time a losing message will appear. This will also pull the name of the user, from the input entry

![screenshot of losing message](assets/readme-images/losing-message.png)

- The end message fades in to make the transition less jarring and to create a more pleasant user experience
- There is an option for the user to restart the game. This has the same hover styling as the other button elements. The restart button will hide the end game message and take the player back to the main screen where the game will be reset in the same way as the restart button does on the main page

![screenshot of restart button](assets/readme-images/restart-button-initial.png)

- There is no confirm alert, on the restart button, in the end page as restarting is the only option to continue the game at this point
- Beneath the restart game option there is a link the user can click. This will take them to the Animal Asia charity website where, if they wish, they can make a donation to help the bears

![screenshot of help the bears button](assets/readme-images/help-the-bears-initial.png)

- The link scales, by 1.2, on hover, to entice the user to click it

![screenshot of help the bears hover](assets/readme-images/help-the-bears-scaled.png)

### 404.html

- I added a custom 404.html page. This will be displayed if a user makes a typing error when entering the url of the website

![404 error page screenshot](assets/readme-images/404.png)

- There is a 'Return to Home' button so the user can easily navigate back the Home page

![404 error page button screenshot](assets/readme-images/return-to-home.png)

## Future Implementations

- The user to be able to choose a range of game area sizes, with more of less cards. This could either have more / less pairs or more than two of the same image
- For the user to be able to choose from different sets of images
- There to be a leaderboard of scores. This could be on a local level, and based from the users statistics, or could be a leaderboard from all players playing the game
- Other games to be added

## Accessibility

- All pages use semantic html
- Aria-labels were used to improve accessibility for those using assistive technology. These are in all links apart from those in the footer. This is due to the footer text already telling those using a screen reader where the link would take them
- I used the Google Chrome extension:
  - Web Disability Simulator – simulated the website for people with sight, mobility, reading and writing and concentration disabilities to view the webpage how others could see it. There were no concerns noted in these simulations

### Wave Validator

I used the Wave validator to check if I could improve the user experience of the webpage for those with disabilities. This flagged no errors

![wave validation screenshot](assets/readme-images/wave-validator.png)

- There were two alerts. The first alert was for a possible heading. This was for the ‘enter your name and press start to begin paragraph. I left this as a paragraph as, it is not a header, and is not necessary to have it as a header for accessibility – I checked this with a screen reader and the enter name input makes it clear what needs to be entered here
- The second alert was because of the noscript tag in the html. I did some research and there were many sources that said, when the noscript element is written as mine is written, it is perfectly accessible. I decided to keep this in as it may be needed by someone who is using a browser that doesn’t support JavaScript

![wave validation alerts screenshot](assets/readme-images/wave-alerts.png)

- No contrast errors were found

![wave validation contrast screenshot](assets/readme-images/wave-contrast.png)

[Back to top](#matching-bears)

# Technologies Used

## Languages Used

HTML, CSS and JavaScript were used to create this website.

## Frameworks, libraries and programs used

- Am I Responsive? To show the website image on a range of devices
- Codeanywhere – To write the code
- Convertio - To change images to webp format and reduce file size
- Figma – To create wireframes
- Font Awesome - For the iconography on the social media links
- Github - To save and store files
- Google Dev Tools – Used to troubleshoot and debug
- Google Fonts - To import the fonts used on the website
- JShint – to check for any issues in the JavaScript code
- Wave Validator – To check if improvement could be made for those users with disabilities
- WC3 Validator / Jigsaw – To check code meets the required standard

[Back to top](#matching-bears)

# Deployment and Local Development

## Deployment

This site is deployed using Github pages:

- Sign up and login to GitHub
- Find the GitHub repository <https://github.com/Gkicks/matching-bears.git>
- Click “settings”
- In the lefthand navigation panel locate and click “pages”
- Change the branch from “none” to “main”
- Click “save”
- The website will then be deployed. This process my take a few minutes and then “your site is live at …” will appear towards the top of the page

## Local Development

### How to Fork

- Sign up and login to GitHub
- Find the GitHub repository <https://github.com/Gkicks/matching-bears.git>
- Locate the “fork” button which is located towards the top of the page. Click this button

### How to Clone

- Sign up and login to GitHub
- Find the GitHub repository <https://github.com/Gkicks/matching-bears.git>
- Locate the “<> Code” button and click this. This will bring up a new panel
- Click the local tab
- Decide if you would like to clone with HTTPS, SSH or GitHub CLI – copy the link shown under the one of your choosing
- Open your code editor
- Open a new terminal in your code editor and change the working directory to the location you want to use for the clone directory (you can use the cd command to change directories)
- When you are in your chosen directory type “git clone” followed by pasting in the URL you copied in GitHub
- Press enter to execute the command and your clone will be created

[Back to top](#matching-bears)

# Testing

## Automated Testing

I tested the website in the following browsers:

- Chrome
- Edge
- Firefox

There were two concerns noted from testing in Firefox:

- When the user clicked into the input the border was blue. I added input:-moz-focusring into css and that the outline be outline: 1px solid #4D3B32;
- The ? text, on the card back was still showing when the card was flipped. I added an animation, to the toggleCard class, to make the opacity of the text change to 0 while the toggleClass class was present

I also used Chrome Developer tools to look for bugs throughout designing and building the website and test how the screen looked and worked on the following device screens:

- iPhone SE
- iPhone XR
- iPhone 12 Pro
- Pixel 5
- Samsung Galaxy S8+
- Galaxy S20 Ultra
- iPad Air
- iPad Mini
- Surface Pro 7
- Surface Duo
- Galaxy Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max
- iPhone 6/7/8
- Facebook for Android v407 on Pixel 6
  Of these, the narrowest screensize was the Galaxy Fold so I made sure the website was responsive down to this size. I have a Galaxy Fold 4 so also tested the website on this device.

I asked friends and family to test the website on their devices. There was one concern raised from this:

- On a IPhone 8 only the bottom third of the screen was showing. I had also found a bug with the webpage not being displayed, at the top of the page, on reload, and I suspected this was the same issue. I resolved this by:

  - Added display: none to the hidden class css
  - Removed align-items: centre from the body
  - Changed overflow: hidden to overflow-x: hidden

This resolved both issues

## WC3 Validator

I ran my HTML and CSS through the WC3 Validators. There were no errors returned through doing this in either the index.html nor 404.html pages. The validator showed this message for both:

![screenshot of wc3 validator](assets/readme-images/wc3-validator.png)

I used the WC3 Jigsaw validator to test my CSS. This returned:
final
![screenshot of jigsaw validator](assets/readme-images/jigsaw-validation.png)

And JShint to check my Javascipt. This returned one concern:

![screenshot of jshint validator warning](assets/readme-images/jshint-warning.png)

However, through discussions with my mentor, Graeme, it was decided this was a warning, rather than an error and it didn’t affect my code negatively in any way. Graeme showed me how to configure JShint to remove the check for this incidence. JShint then showed no concerns:

![screenshot of jshint validator warning](assets/readme-images/jshint-final.png)

## Lighthouse

I used Lighthouse, within the Chrome developer tools, to check the performance, accessibilty, SEO and best practice of the website

### Index.html

#### Desktop

![screenshot of lighthouse for index.html desktop](assets/readme-images/lighthouse-indexhtml-desktop.png)

#### Mobile

![screenshot of lighthouse for index.html mobile](assets/readme-images/lighthouse-indexhtml-mobile.png)

### 404.html

#### Desktop

![screenshot of lighthouse for 404.html desktop](assets/readme-images/lighthouse-404-desktop.png)

#### Mobile

![screenshot of lighthouse for 404.html mobile](assets/readme-images/lighthouse-404-mobile.png)

## Manual Testing

### Testing User Stories

### Client Goals

|                     Goal                     |                                                                                                                                                                   How is this achieved?                                                                                                                                                                    |
| :------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    To be responsive on a range of devices    |                                                                                                                       The website was tested on various sizes and was responsive to all sizes tested – see automated testing section                                                                                                                       |
| The game to have different difficulty levels |                                                                                     There are three difficulty levels the user can choose from. At the easy level they have 100 seconds to complete the game, at medium they have 60 seconds and, at hard, 30 seconds                                                                                      |
|    Statistics of the game to be displayed    | There is a countdown timer in the bottom lefthand corner of the screen which tells the user how much time they have left. In the right hand corner there is a flip counter which increases, by one, each time a card is flipped. The winning message tells the user how much time they have remaining and how many flips it took them to complete the game |
|        Have a link to a bears charity        |                                                                                                              This is included in the end game div and contains an external link to a charity that helps bears that are farmed for their bile                                                                                                               |

### Visitor Goals

|                                  Goal                                   |                                                                                                                                                                   How is this achieved?                                                                                                                                                                    |
| :---------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                To be able to easily navigate the website                |                                                                                                                 The website is intuative and easy to navigate. Any buttons are where the user would expect them to be and clearly visible                                                                                                                  |
|                 Understand the features of the website                  |                                                                                                   The design has been kept simple, so it's clear the function of each part of the site. Buttons are designed to make the function very clear to the user                                                                                                   |
|              To have an enjoyable game playing experience               |                                                                         The site is simple to use and offers different difficulty levels, as well as game playing statistics, to enhance the user experience. All those I asked to test the game said they had enjoyed playing it                                                                          |
| To have the option of sound during the game but to be able to mute this |                                                                                                                     The game has an audio button that’s located just under the main title. This can be toggled between audio and mute                                                                                                                      |
|                 Be rewarded when they have won the game                 |                                                                                                         When all the cards have been matched there is an animation where the cards will wiggle briefly, because a congratulations message appears                                                                                                          |
|       To be able to play the game at different difficulty levels        |                                                                                     There are three difficulty levels the user can choose from. At the easy level they have 100 seconds to complete the game, at medium they have 60 seconds and, at hard, 30 seconds                                                                                      |
|             To be able to see their game playing statistics             | There is a countdown timer in the bottom lefthand corner of the screen which tells the user how much time they have left. In the right hand corner there is a flip counter which increases, by one, each time a card is flipped. The winning message tells the user how much time they have remaining and how many flips it took them to complete the game |
|    To have the opportunity to donate to a charity relating to bears     |                                                                                                              This is included in the end game div and contains an external link to a charity that helps bears that are farmed for their bile                                                                                                               |

## Full Testing

Full testing was completed on the following devices:

- Galaxy Fold 4 (mobile)
- Galaxy A20e (mobile)
- Galaxy Book2 Pro360 (15.6” laptop)
- Dell Computer (desktop)
- iPad 8th Generation (tablet)

### Landing Page

|          Feature           |                                                                  Expected Outcome                                                                   |        Testing Performed        |                                        Result                                        | Pass / Fail |
| :------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------: | :----------------------------------------------------------------------------------: | :---------: |
|     How to Play Title      | For the colours to be inverted on hover and for an instructions area to be displayed when clicked. The instructions to disappear when clicked again |        Clicked on title         | Colours inverted on hover. The instructions display was toggled with repeated clicks |    Pass     |
|        Input fields        |                                                     Allow user to enter their personal details                                                      | Entered details into each input |                                 Information inputted                                 |    Pass     |
|     Start Game button      |                                                    The display to move to the main page on click                                                    |        Clicked on button        |                        Game play area was displayed on click                         |    Pass     |
| Start Game button on hover |                                                                  Colours to invert                                                                  |       Hovered over button       |                                   Colours inverted                                   |    Pass     |

### Main Page

|                           Feature                            |                                                        Expected Outcome                                                        |                                                                                                                           Testing Performed                                                                                                                            |                                                                                                                                                                                          Result                                                                                                                                                                                          | Pass / Fail |
| :----------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------: |
|                         Audio Button                         |                                Display to toggle between volume icon and mute icon when clicked                                |                                                                                                                           Clicked on button                                                                                                                            |                                                                                                                                                                     Diplay toggled between volume icon and mute icon                                                                                                                                                                     |    Pass     |
|            Audio Button with Volume Icon Showing             |       Flipping card sound to be played when the user flips a card and a ding sound to play when the user matches a card        |                                                                                                         Played game with audio button showing the volume icon                                                                                                          |                                                                                                                                            Flipping card sound played when a card flipped and a ding sound played when two cards were matched                                                                                                                                            |    Pass     |
|             Audio Button with Mute Icon Showing              |                                           No sound to be played throughout the game                                            |                                                                                                          Played game with audio button showing the mute icon                                                                                                           |                                                                                                                                                                         No sound was played throughout the game                                                                                                                                                                          |    Pass     |
|                     Difficulty Selector                      |                 When clicked, a drop down box to appear that gives the user the option of easy, medium or hard                 |                                                                                                                           Clicked on Select                                                                                                                            |                                                                                                                                                      A dropdpwn box showed with three option to select from – easy, medium and hard                                                                                                                                                      |    Pass     |
|                 Difficulty Selector on hover                 |                                                     Colours to be inverted                                                     |                                                                                                                           Hovered on Select                                                                                                                            |                                                                                                                                                                                Colours inverted on hover                                                                                                                                                                                 |    Pass     |
| Difficulty Selector when card has been clicked to start game |                                                     Select to be disabled                                                      |                                                                                                                Clicked on Card and then clicked Select                                                                                                                 |                                                                                                                                                                    Select was faded out and I was unable to click it                                                                                                                                                                     |    Pass     |
|                         Time Counter                         |   To have a different starting number based on difficulty selected. For easy to display 100, for medium 60 and, for hard, 30   |                                                                                                                     Clicked on each Select option                                                                                                                      |                                                                                                                                                       The timer showed 100 when easy was selected, 60 when medium and 30 when hard                                                                                                                                                       |    Pass     |
|                Time Counter during game play                 |                                To reduce by one each second from when the first card is clicked                                |                                                                           Clicked on a card at each of the three difficulty levels. Timed the countdown, with a stopwatch, to check accuracy                                                                           |                                                                                                                          The timer started, at each of the difficulty levels, when the first card was clicked. The countdown time matched that of my stopwatch                                                                                                                           |    Pass     |
|                  Time Counter reaching zero                  |                                         End page to be displayed with a losing message                                         |                                                                                                                   Waited for the time to reach zero                                                                                                                    |                                                                                                                                                               The end game page was displayed with a commiseration message                                                                                                                                                               |    Pass     |
|            Time Counter on all card being matched            |                                                     To stop counting down                                                      |                                                                                                                              Won the game                                                                                                                              |                                                                                                                                                                                    The timer stopped                                                                                                                                                                                     |    Pass     |
|                        Restart Button                        |                 A confirmation alert to appear, asking the user if they’re sure they want to restart the game                  | The game to be restarted: The difficulty selector to be enabled, the time to reset to the difficulty and not count down until first card is clicked again, flips to be reset to zero, any cards that have been matched to be flipped back over, cards to be reshuffled | Played the game for a while and then clicked the restart button. A confimation box appeared on click. I clicked ‘okay’. I was able to change the difficulty, the time count reset to that determined by the difficulty level, the flip counts rest to zero, any cards that were facing up flipped back over. The cards were not the same as they previously were and had been reshuffled |    Pass     |
|                   Restart button on hover                    |                                                       Colours to invert                                                        |                                                                                                                          Hovered over button                                                                                                                           |                                                                                                                                                                                     Colours inverted                                                                                                                                                                                     |    Pass     |
|                         Flip Counter                         |                                         To increase by one each time a card is clicked                                         |                                                                                                    Played the game. I tried clicking on different areas during play                                                                                                    |                                                                              There was a bug that, when two unmatched cards were turned, I was still able to clicked an unturned card and increased the flip counter. I fixed this (see bug section) and the flip counter only increases when a card flips                                                                               |    Pass     |
|                             Card                             |                           To flip over when clicked. To stay facing up until another card is flipped                           |                                                                                                                              Clicked card                                                                                                                              |                                                                                                                                                                          Card flipped over and stayed facing up                                                                                                                                                                          |    Pass     |
|                 Two unmatched cards flipped                  | To display both card faces before flipping back over. To not be able to flip any other cards until they have both flipped back |                                                                                 Clicked on two cards in an unmatched pair. Tried cllicking other cards while they were still facing up                                                                                 |                                                                                                                            The two unmatched cards were displayed before flipping back. While these two card were in play I was unable to flip an other cards                                                                                                                            |    Pass     |
|                  Two matched cards flipped                   |                            For the two matching cards to remain facing upwards throughout the game                             |                                                                                                                            Played the game                                                                                                                             |                                                                                                                                                           Any two matched cards remaining facing upwards until the game ended                                                                                                                                                            |    Pass     |
|                All cards on all being matched                |                         All cards to display a wiggle animation before a winning end page is displayed                         |                                                                                                                              Won the game                                                                                                                              |                                                                                                                                                               The cards wiggled before the winning game display was shown                                                                                                                                                                |    Pass     |

### End Page

|          Feature          |                                                                                                                                                     Expected Outcome                                                                                                                                                      |   Testing Performed   |                                                                                                                                                                   Result                                                                                                                                                                   | Pass / Fail |
| :-----------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------: |
|      Winning Message      |                                                                                      To use the name the user inputted at the start. To pull the time that was remaining and the number of flips the user had completed the game in                                                                                       |     Won the game      |                                                                                                         The winning message was displayed. It showed my name, the time I had remianing and the number of flips I had taken to win                                                                                                          |    Pass     |
|      Losing Message       |                                                                                                                                      To use the name the user inputted at the start.                                                                                                                                      |     Lost the game     |                                                                                                                        The losing message was displayed and it contained the name I had inputting at the beginning                                                                                                                         |    Pass     |
|      Restart button       | The end game message to disappear and the game playing area to be displayed. The difficulty selector to be enabled, the time to reset to the difficulty and not count down until first card is clicked again, flips to be reset to zero, any cards that have been matched to be flipped back over, cards to be reshuffled |  Clicked the button   | The end game message disappeared and the game playing area was displayed. I was able to change the difficulty, the time count reset to that determined by the difficulty level, the flip counts rest to zero, any cards that were facing up flipped back over. The cards were not the same as they previously were and had been reshuffled |    Pass     |
|  Restart button on hover  |                                                                                                                                                     Colours to invert                                                                                                                                                     |  Hovered over button  |                                                                                                                                                              Colours inverted                                                                                                                                                              |    Pass     |
|    Help the Bears link    |                                                                                                                           The user to be taken to the Animal Asia charity page in a new window                                                                                                                            |   Clicked the link    |                                                                                                                                              Opened the correct website in a new browser page                                                                                                                                              |    Pass     |
| Help the Bears link hover |                                                                                                                                                     Size to increase                                                                                                                                                      | Hovered over the link |                                                                                                                                                             Link size expanded                                                                                                                                                             |    Pass     |

### 404 Page

|        Feature        |    Expected Outcome    | Testing Performed |      Result      | Pass / Fail |
| :-------------------: | :--------------------: | :---------------: | :--------------: | :---------: |
| Return to Home button | Links to the Home Page |  Clicked button   | Home Page opened |    Pass     |

## Bugs

### Resolved Bugs

|                                                                                                    Bug                                                                                                    |                                                                                                                                                                                         Solution                                                                                                                                                                                          |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  When I put transform rotateY styling on the card I tested it by using .card:hover. This worked but both the image and the back on the card were showing on hover. This needed to be the other way round  |                                                                          I changed the order that the backFace div and image were appended, to the card divs so the image was first and then the backFace after, so this would be the last created. I then moved the backface-visibility to the cardFront image                                                                           |
|                    When the card was turning there was no background colour so, when the edge of the card went over the background div, it made it look like the card was transparent                     |                                                        I first added a background colour to the image. This didn’t go to the edges as I’d set the image size to 90% to stop it touching the sides of the card. I set the image size to 100% and put in 5% padding. This meant the background colour went to the edges of the card                                                         |
|                                                 The function to check the first two cards flipped matched was executing before any cards had been clicked                                                 |                                            I contacted Student Support and they helped me realise that I was calling the function before any cards had been clicked. I separated the event listener for clicking the cards from the function for matching the cards. I then added the function for checking the cards after the event listener                                            |
|                              Once a matching pair had been found the user could still click on one of those cards and flip them back over, when they should remain facing up                              |                                                                                                                                            I added pointerEvents = ‘none’, to the matching pair, which prevents the user clicking on it again                                                                                                                                             |
|                                        When a game had finished, and the end game page was displayed, the page was reloading before the restart button was clicked                                        |                                                      I’d put location.reload in but hadn’t put this as a function. I made this a function and it worked as it should (this was later removed as I added a start page and added a restartGame function so the user could restart the game without the landing page being shown again)                                                      |
|                                     On the user matching all the pairs, the end game display was loading immediately and not giving the user time to enjoy their win                                      |                                                                                                          Added a setTimeout to delay the end game message being displayed. Also added some animation to the images, on the user getting all matches, to improve user experience                                                                                                           |
|                                                                    Some cards weren’t turning unless I clicked in a very specific area                                                                    | I looked at the elements by showing them in Chrome Dev Tools. I saw that the cards that weren’t clicking were covered by the hidden ‘restart game’ button in the hidden end game div. I changed the size of this div so it was 0 height and width. I then amended the Javascript so the dimensions were put back on the div when it became displayed, through adding and removing classes |
|                                                                    The winning end game display had some brown lines at the top of it                                                                     |                                                                                                                                                          This was because I’d put a top positioning of 10%. I changed this to 0                                                                                                                                                           |
|                                                                          The ears of the pictures on the cards were being cutoff                                                                          |                                                                                                                               This was due to the border radius. I decreased the border-radius to 10px. I thought this looked better and resolved the issue                                                                                                                               |
|                                                       When I pressed the start submit button it was going to the main screen without needing a name                                                       |                                                                                                                        I put a condition, in the hideStartPage function, that the length of the input value needed to be greater than zero before it was executed                                                                                                                         |
|                                                       The user was still able to click on other cards while two unmatched cards were still in play                                                        |                                                                                                                              I added a disableCards function which removed the event listeners from the cards if the unmatched toggledCards was equal to two                                                                                                                              |
| Following the above I was finding that I was having to double click on the first card clicked, after finding no match, twice. This was because the function didn’t execute until a card was clicked again |                                                                                                                                                             I put a setTimer on the function to check it every half a second                                                                                                                                                              |
|                                              When I was making the website responsive the main page was showing, under the landing page, on smaller screens                                               |                                                                                                                                                                        Added overflow: hidden to the body element                                                                                                                                                                         |
|                                                   On restart flips were resetting to 0 but then, once card pressed, was recounting from last flip count                                                   |                                                                                                                                                                        Added flips = 0 into the restart functions                                                                                                                                                                         |
|                                                                       On restart the timeCount started before a button was clicked                                                                        |                                            This was happening because tThe timeGame function was never stopped. I added an if abort = true, return to the timeGame function to abort the TimeCount function. I then made an abort function to be able to turn abort back to false, once the user started playing again, so the timer restarted |
| On restart, after the user had won the game, the winning animation was playing as soon as a card was pressed to start the next game | There was no code to empty the matchedCards array following a win. I added matchedCards = 0 into the restartGame function |
| Two sets of cards were being generated, occasionally, on restartGame                                                                    |                                                                                                                                                                        Added gameCards = 0 to restartGame function                                                                                                                                                                        |
|                                                                    The time countdown was speeding up as the cards were being clicked                                                                     |                                                                    The disable game was making the timeGame run on each click, rather than once. I removed the addEventListener and removeEventListener functions from the disableGame function and only put in the event listeners that needed to be added / removed                                                                     |
|                   Doing the above caused the second pair clicked to not toggle back over until another card was clicked. This was because the eventListener for this had been disabled                    |                                                                                                                                                  Added for the checkMatch function to be run after the eventListeners had been disabled                                                                                                                                                   |
|                                                                                The audioFlip wasn’t playing on every flip                                                                                 |                                                                                                                              Added audioFlip.currentTime = 0 to the start of the function as the clip for the previous card flip may still have been running                                                                                                                              |
|                                                                Font awesome image wasn’t loading until after main page was being displayed                                                                |                                                                                                               Added fontawesome script to the head of the page rather than the end. My research indicated this would help the icons load quicker and it did appear to do so                                                                                                               |
|                                                       Unless the user matched all the pairs, with no mistakes, the wonGame function wasn’t working                                                        |                         This was due to the disableGame function removing and adding the turnCard function, so the turnCard function was being executed after the wonGame function was. I added for the wonGame and checkMatch functions to also be added and removed in the disableGame function. I put them to be added in the order they needed to be executed                         |
|                                                                                 audioMatch was still playing when mute on                                                                                 |                                                                                                                                                         Added a check to make sure audioState is 0 before audioMatch sound played                                                                                                                                                         |
|                                               When restarting from the end game page, the restart button wasn’t disappearing immediately and was fading out                                               |                                                                                                                    Added the hidden class to the restart button and used JavaScript to remove this when the end game part appears. Add opacity: 0 to the hidden class                                                                                                                     |
|                                                                 The input element’s border was turning yellow when the user clicked on it                                                                 |                                                                                    Added input:active code, in CSS, for there to be a border when this is active. This disn’t resolve the issue in Firefox so I added input:-moz-focusring into css and that the outline be outline: 1px solid #4D3B32                                                                                    |
|         The timer continued after the user finished the game. This meant the end page winning message would turn into a losing message if the user was still on that screen when the time ran out         |                                                                                                                                         Added an abort line, in the wonGame function, so the timer stops when the user has matched all the cards                                                                                                                                          |
|                            When two unmatched cards were face up the flip counter was still increasing, when the user clicked another card, even though the game was disabled                             |                                                                                                                                               Added for the countFlip event listener to be removed / added within the disableGame function                                                                                                                                                |
|    If the user didn’t enter a name into the input, and pressed start, they would be asked to input their name. If they then inputed their name and pressed start, two sets of cards would be generated    |                                                                                                                                               Added if statement, to check input.length > 0 before the generateCards function was generated                                                                                                                                               |
|                                                         When the user reloaded they then had to scroll up to see the content on the landing page                                                          |                                                                                                                          Added display: none to the hidden class css, removed align-items: centre from the body, changed overflow: hidden to overflow-x: hidden                                                                                                                           |

### Unresolved Bugs

- In Firefox there is still a brief period of time where the question mark appears over the image until it flips back. The soloutions I tested affected how the game looked on the other browsers so I decided to leave it as it is. This is something that could be resolved at a later time

[Back to top](#matching-bears)

# Credits

## Code Used

- cardInfo.sort(() => Math.random() - 0.5);

This code was taken from the website https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript and was using in my generateCards function to shuffle the cards

## Content

All content was written by Gail Kicks

## Media

All photos and audio was taken from the websites pixabay.com

## Other

I used the following resources to expand my knowledge of JavaScript, html and css:

- The Code Institute lessons, including the LoveMaths project
- The Ultimate 2023 Fullstack Web Developer Bootcamp on Udemy
- developer.mozilla.org
- stackoverflow.com
- w3schools.com
- linuxhint.com
- foolishdeveloper.com
- Code Institute’s Slack community

## Acknowledgements

I would like to acknowledge the following people for their help in completing my project:

- My mentor, Graeme Taylor, for his advice and ideas
- My family and friends for helping me during the testing stages
- The Tutor Support team at Code Institute
- The Code Institute Slack community
- Kera Cudmore for her fantastic README presentation and documentation
- The Code Institute Assessment team for their thorough assessment of my first project. I used the comments given to improve on those areas in this project

[Back to top](#matching-bears)
