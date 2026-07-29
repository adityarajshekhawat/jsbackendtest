require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

const githubdata = {
  login: "adityarajshekhawat",
  id: 76028553,
  node_id: "MDQ6VXNlcjc2MDI4NTUz",
  avatar_url: "https://avatars.githubusercontent.com/u/76028553?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/adityarajshekhawat",
  html_url: "https://github.com/adityarajshekhawat",
  followers_url: "https://api.github.com/users/adityarajshekhawat/followers",
  following_url:
    "https://api.github.com/users/adityarajshekhawat/following{/other_user}",
  gists_url: "https://api.github.com/users/adityarajshekhawat/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/adityarajshekhawat/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/adityarajshekhawat/subscriptions",
  organizations_url: "https://api.github.com/users/adityarajshekhawat/orgs",
  repos_url: "https://api.github.com/users/adityarajshekhawat/repos",
  events_url:
    "https://api.github.com/users/adityarajshekhawat/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/adityarajshekhawat/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Aditya Raj shekhawat",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Computer Science Student\r\nexploring flields and learning new topics\r\n",
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 3,
  following: 4,
  created_at: "2020-12-15T04:59:24Z",
  updated_at: "2026-07-29T18:22:42Z",
};

app.get('/' , (req,res) =>{
    res.send("Hello Ji !!")
})

app.get('/twitter' , (req,res) =>{
    res.send("adityaraj")
})
app.get("/twitteremail", (req, res) => {
  res.send("<h1>aditya@gmail.com</h1>");
});
app.get('/youtube' , (req,res) =>{
    res.send("<marquee>chaiaurcode</marquee>");
})

app.get('/github' , (req,res) =>{
    res.json(githubdata)
})

app.listen(process.env.PORT,()=>{
    console.log(`sun rahe hai ji!! ${process.env.PORT} port `);
})