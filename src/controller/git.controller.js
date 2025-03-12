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
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ error: "Failed to fetch user's github data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching Github data" });
  }
};

exports.getRepoDetails = async (req, res) => {
  try {
    const { repo } = req.params;
    const response = await githubApi.get(`/repos/${username}/${repo}`);
    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(400).json({ error: "Failed to repository data." });
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching repository data." });
  }
};

exports.createIssue = async (req, res) => {
  try {
    const { repo } = req.params;
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required" });
    }

    const response = await githubApi.post(`/repos/${username}/${repo}/issues`, {
      title,
      body,
    });

    return res.status(201).json({ issue_url: response.data.html_url });
  } catch (error) {
    res.status(500).json({ error: "Error creating Github issue" });
  }
};
