# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Gary Tsang**

Time spent: **9.5** hours spent in total

Link to project: https://glitch.com/~fun-memory-game

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Basic version of the game without any modifications full demonstration (without game audio)
![basic ver](https://user-images.githubusercontent.com/97865970/159108492-f42b5499-01de-4801-93d9-4c76d04456e8.gif)

With game audio demonstration (audio GIF) suggested by CodePath TA


https://user-images.githubusercontent.com/97865970/159110149-e95ec3bc-169e-4a33-ad00-becd5564f606.mp4


**[OFFICIAL VERSION]**

Modified version of the game full demonstration (without game audio)
![modified-ver](https://user-images.githubusercontent.com/97865970/159108497-a6a12b13-ffb6-485d-9e3f-0ddeadb6568a.gif)

With game audio demonstration (audio GIF) suggested by CodePath TA


https://user-images.githubusercontent.com/97865970/159110445-a2df4ab6-871d-4888-8f6d-ab86327bf836.mp4


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    Codepath TA: Anitya Kumar Gupta
    
    https://www.colorhexa.com/
    
    https://www.w3schools.com/cssref/
    
    https://flaviocopes.com/how-to-get-last-item-array-javascript/#:~:text=Find%20out%20how%20to%20get%20last%20element%20of%20an%20array%20in%20JavaScript&text=To%20get%20the%20last%20item,length%20%2D%201%20item.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    
   A challenge I encountered when I was creating this submission was the game logic at the end because some of the variables involved were kind of confusing like the progress and guessCounter variables. I thought they were essentially the same thing, so when I finished coding the game logic and the pattern and messages being shown did not correspond, I was thinking about what I did wrong. For example, I would get the buttons to play the sound and light up twice, and after that, it would terminate the game and display a message saying I either won the game or lost the game, and it would not go into the third sequence. It took some time to see what I did wrong, but I went back through the directions and made comments on my code and variables to see where I went wrong, since before I did not have many comments on my code, which may be the reason I got confused with those two variables. In the end, I was able to differentiate the purpose of those two variables since guessCounter was supposed to be the index of the array, and progress was to keep track of if the player got the buttons correct.
   
   Another challenge I had was trying to indicate the last turn in the game. I thought maybe I could use the if condition **if (pattern[guessCounter -1] == guessCounter -1)**, I would be able to tell if that is the last turn to be played since if those two guessCounter value matches that mean the end of the pattern array has been reached, right? Sadly, that was not the case. I struggled to find the answer to this solution for a while, so I took a peek at the suggested methods and saw that the programmer that finished the game used the **<array>.length - 1** function, so I tried it on my code, and it worked. However, I wanted to learn how this function worked, so I researched it and came across the site flaviocopes.com, which explained the purpose of this function and how it works. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    
    After completing my submission, some questions that I have about web development are, how often do web developers work with other programming languages besides HTML, CSS, and Javascript? I ask this because I realized that Javascript can be used in a lot more things other than with web development, such as app creation and mobile game development. Also, can you do web development through other programming languages like Python or C++? Since I mostly use C++ as my daily programming language (since that was the first programming language taught to me in school), I came to realize that most of the things I program in that language can be turned into apps or websites. I was wondering if it was possible to implement C++ with HTML and CSS, or would that not be possible since C++ is not built to be paired with web development, and I would have to translate the C++ code into proper HTML, CSS, and Javascript code. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    
    If I had a few more hours to work on this project, I would have spent more time figuring out how to randomize the pitch patterns being played in each game. I thought that feature seems amazing and it would make the game a lot more fun and interesting since the player would not know what sound will play next. If permitted, another thing I would have added is an actual congratulations message after the player wins the game or game over message instead of a notification-like message from the browser. Additionally, I would have liked to try and add different levels to the game. When the player fully completes the pattern correctly each time, in the next level the sounds playing would increase in speed to make it more difficult. 


## License

    Copyright [Gary Tsang]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
