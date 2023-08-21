# test
for uploading two folder in a single git repo,local folder having struture like:
parentFolder:--
    |-folder1
    |-folder2

initialize git in parentFolder-               git init
to check the untracked folders and files -    git status
to add remote repo address               -    git remote add origin https://github.com/crispyrockstar/test.git
to check the remote repo address         -    git remote -v
to add folders and files to staging area -    git add folder1/           {Here make sure you haven't initialised git inside folder1/folder2}
verify again that it is added to stagingArea- git status
now commit                                 -  git commit -m "Added folder1 to repo"
now push                                   -  git push origin <BRANCH_NAME>
now check in repository folder1 must be get added.

now repeat same process for folder2 from line 11-15, like this you can upload both folder on github in a single repository.
