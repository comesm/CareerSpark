At the beginning of your workday, from your computer, run from the master branch of your repository:
     
     git pull upstream master

b) Create a branch that you will work from

   git checkout -b <branchname>

c) Work as usual, committing to your branch...

   git add .
     git commit -m 'messageText'

d) When you are ready for other people to see your changes, you'll first need to check to see if any changes have been made to your remote (Baggins). The easiest way to do this is to run the following command (while your working branch is checked out, not the master branch):


   git pull --rebase upstream master

e) Now all of the changes that your peers made appear on your working branch. But your master branch doesn't have these changes yet. So you'll need to checkout master, and then rebase your master to your working branch.

 git checkout master
   git rebase <branchName>

f) Now you can push these changes up to your master branch on your github Fork:

 git push origin master

g) And then create the pull request through GitHub.