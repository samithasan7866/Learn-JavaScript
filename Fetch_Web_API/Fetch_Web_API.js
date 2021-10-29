//Fetch API
/* const gitAPI = fetch('https://api.github.com/users/andrew');
gitAPI
    .then((res) => res.json())
    .then((profile) => console.log(profile))
    .catch((err) => console.log(err));
console.log(gitAPI);
*/

//2nd way
async function getInfoFromGit(){
    try{
        const res = await fetch('https://api.github.com/users/andrew');
        const profile = await res.json();
        console.log(profile);
    }catch (err){
        console.log(err);
    }
}
getInfoFromGit();