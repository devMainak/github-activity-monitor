const axios = require("axios");
const username = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

exports.getUserDetails = async (req, res) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Github data" });
  }
};

exports.getRepoDetails = async (req, res) => {
  try {
    const { repo } = req.params;
    const response = await githubApi.get(`/repos/${username}/${repo}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.json(500).json({ error: "Error fetching repository data." });
  }
};

exports.createIssue = async (req, res) => {
  try {
    const { repo } = req.params;
    const { title, body } = req.body;
    const response = await githubApi.post(`/repos/${username}/${repo}/issues`, {
      title,
      body,
    });
    res.status(201).json({ issus_url: response.data.html_url });
  } catch (error) {
    res.status(500).json({ error: "Error creating Github issue" });
  }
};
