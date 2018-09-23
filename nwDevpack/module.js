//version 1.0 

/* using creating a subtree from existing folder in your repo

1 split common folder into its own branch 
     git subtree split --prefix nwDevpack --branch nwDevpack
2. remove the common folder from your project
    git rm -rf nwDevpack
3. create a new repo within parent project by creating a folder and doing a git init
    
4 pull the contents of the branch you split  into the new repo with your parent project  */

