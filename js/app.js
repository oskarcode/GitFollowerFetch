const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


// const client_id = 'Iv1.a28d83270a182327';
// const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';

// const fetchFollower = async (user) =>{
//     const api_call = await fetchuser.request('GET/user/followers');
//     const data = await api_call.json();
//     return {data}
// };

// const ShowData = ()=> {
//     fetchFollower(inputValue.value).then((res) =>{
//         console.log(res);
//         nameContainer.innerHTML = `Follower: <span class = 'main__profile-value'>${res.data.followers}</span>`;


//     })
// };

// searchButton.addEventListener('click',() =>{
//     ShowData();
// });


const client_id = 'Iv1.a28d83270a182327';
const client_secret = 'be2f8d7e75a45ef8e174dfed94db5b868bc1b194';

// searchButton.addEventListener('click',() =>{
//     console.log('Hello');
// })

// const fetchFollower = async (user) =>{
//     const api_call = await fetch(`https://api.github.com/users/${user}? client_id=${client_id} & client_secret=${client_secret}`);
//     const data = await api_call.json();
//     return {data}
// };

const awaitFetch = async (url) =>{
    const api_call = await fetch(url);
    const data = await api_call.json();
    return {data}
};

const ShowData = ()=> {
    const user = inputValue.value
    const user_url = `https://api.github.com/users/${user}?client_id=${client_id} & client_secret=${client_secret}`
    awaitFetch(user_url).then((res) =>{
        var followers_url = res.data.followers_url
        followers_url += '?per_page=1000&page=1'
        console.log(followers_url)
        awaitFetch(followers_url).then((res) =>{
            console.log(res)
            console.log(res.data)
            const followers = res.data
            for (i in followers) {
                // console.log(followers[i].followers_url);
                console.log(followers[i].login);
                nameContainer.innerHTML += `name: ${followers[i].login}<br>`
            }
        });
    });
};

searchButton.addEventListener('click',() =>{
    ShowData();
});


module.exports.GitFollowerFetch = GitFollowerFetch;