# gitBranchWithFuturama

    -----------------------------------------------------------------

	              __                                       
	  ____  ____ |  |__ _____    ____   ________ __  ______
	_/ ___\/  _ \|  |  \\__  \ _/ __ \ /  ___/  |  \/  ___/
	\  \__(  <_> )   Y  \/ __ \\  ___/ \___ \|  |  /\___ \ 
	 \___  >____/|___|  (____  /\___  >____  >____//____  >
	     \/           \/     \/     \/     \/           \/ 
    -----------------------------------------------------------------


    -----------------------------------------------------------------

    .___  .____                          ________.______________
    |   | |    |    _______  __ ____    /  _____/|   \__    ___/
    |   | |    |   /  _ \  \/ // __ \  /   \  ___|   | |    |   
    |   | |    |__(  <_> )   /\  ___/  \    \_\  \   | |    |   
    |___| |_______ \____/ \_/  \___  >  \______  /___| |____|   
                  \/               \/          \/               
    -----------------------------------------------------------------



I has always been fascinated by the GIT and especially the Branch feature. In this project, I want to demonstrate the power of Branch feature and convince you to start using GIT to manage your project. For more information on GIT [Click Here](http://git-scm.com/docs/git-branch).

As a big fan of Futurama cartoon, I have used the characters from Futurama in this project. Every time the branch is changed, the content in the index.html file introduces each characters in the web browser.

In normal circumstance, I would use git branch feature to create new feature in the project and merge the branch to the development branch after the feature is complete. Or for test (experimental) purpose.

For the animation and automation purpose, the complexity have been added. Although you could still get the similar effect of git branch on web browser (refresh the browser every branch is changed <git checkout (branch name)>).

##Requirements:
- Command line interface (Terminal)
- GIT [more info](http://git-scm.com/)
- Web Browser (recommend: Chrome)
- Node (optional) [more info](https://nodejs.org/)

After pulling or downloading the repository, follow the steps below;

##Method 1

####Step 1:
#####In Terminal
Change directory into the project directory. 

####Step 2:
#####In Terminal
Fetch all branchs 
>git pull –all

Check to see if all the branchs are available - by default the branch should be in master branch
>git branch

####Step 3:
Open index.html on web browser. The content should display the Futurama title.

####Step 4:
#####In Terminal
Open another Terminal tab.
Change branch from master to bender 
>git checkout bender

In Web browser:
Reload the page to see Bender

##Method 2 – with Grunt

####Step 1:
#####In Terminal
Change directory into the project directory. 

####Step 2:
#####In Terminal
Fetch all branchs 
>git pull –all

Check to see if all the branchs are available - by default the branch should be in master branch
>git branch

####Step 3:
#####In Terminal
Install all the node modules 
>npm install

####Step 4:
#####In Terminal
Install grunt globally 
>npm install -g grunt-cli

####Step 5:
#####In Terminal
Run grunt - opens the fav web browser and displays the index.html contents (Futurama title) 
>grunt

####Step 6:
#####In Terminal
Open another Terminal tab.
Change branch from master to bender - reloads the contents to Bender
>git checkout bender

###Currently available characters:
* Bender 
>git checkout bender

* Fry 
>git checkout fry

* Leela 
>git checkout leela

* Zoidberg 
>git checkout zoidberg

###Note:
This project is intended for beginner GIT users. 

###Todo:
* Improve the html code
* Add the character description
* Replace the ASCII (thinking…)
