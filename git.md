1. git init // run from project root directory
2. git status // use to display the status of the git status
3. git add `file or folder` // add file to commit 
4. git commit -m 'Initial commit' //commit to git

5. create the ssh key for authencation
    a. ssh-keygen -t rsa -b 4096 -C 'loynin@gmail.com'

6. running ssh agent
    a. running ssh agent by command `eval "$(ssh-agent -s)"`
    b. add file to ssh agent by command `ssh-add ~/.ssh/id_rsa`

7. got to GitHub create a new SSH Key and copy key from id_rsa.pub to the github

8. Testing github access with local computer by command `ssh -T git@github.com`

9. Connect to github server by `git remote add origin https://github.com/loynin/node-web-server.git`

10. push commit to server by `git push -u origin master`

11. Running heroku `heroku login` then enter the email and password for heroku
    a. Run `heroku keys:add` to add the public key to heroku server
    b. check heroku if it upload by running `heroku keys`
    c. Remove heroku if by running `heroku keys:remove`
    d. ssh to heroku server by `ssh -v git@heroku.com`

    e. Heroku: setup:

        on the app file `server.js` change the app start port to the variable such as this : 
                `//Setup for heroku
                const port = process.env.PORT || 3000;
                // End heroku
                app.listen(port,() => {
                    console.log(`Server is up and on port ${port}`);
                });`
        Setup script on `package.json` with the `"start": "node server.js"` to tell the heroku how to start the app.
    
    f. add change to commit by the following: `git add .` // . means add all changed
    g. push git to the remote by `git push`
    h. create heroku git repository `heroku create`
    i. push git to heroku by `git push heroku`
    j. Run `heroku open` to open the live website from heroku
