# github-activity-monitor

## Overview

This backend provides APIs for fetching github details, fetching repo details, allow users to create issues on specific repos. The backend is built using Node.js, Expres.

## Base URL

```
https://github-activity-seven.vercel.app/
```

## API Endpoints

### 1. Get Github user details

**Endpoint:**

```
GET /github
```
**Description:**
Fetch github user account details

**Response:**

```json
{
  "login": "devMainak",
  "id": 137388933,
  "node_id": "U_kgDOCDBjhQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/137388933?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/devMainak",
  "html_url": "https://github.com/devMainak",
  "followers_url": "https://api.github.com/users/devMainak/followers",
  "following_url": "https://api.github.com/users/devMainak/following{/other_user}",
  "gists_url": "https://api.github.com/users/devMainak/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/devMainak/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/devMainak/subscriptions",
  "organizations_url": "https://api.github.com/users/devMainak/orgs",
  "repos_url": "https://api.github.com/users/devMainak/repos",
  "events_url": "https://api.github.com/users/devMainak/events{/privacy}",
  "received_events_url": "https://api.github.com/users/devMainak/received_events",
  "type": "User",
  "user_view_type": "private",
  "site_admin": false,
  "name": "rootKid",
  "company": "neoG Camp",
  "blog": "https://github.com/devMainak",
  "location": "Kolkata, India",
  "email": null,
  "hireable": null,
  "bio": " Trying to install Arch.",
  "twitter_username": "DevMainak09",
  "public_repos": 89,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2023-06-22T08:21:23Z",
  "updated_at": "2025-02-13T09:53:07Z",
  "private_gists": 0,
  "total_private_repos": 7,
  "owned_private_repos": 7,
  "disk_usage": 21490,
  "collaborators": 0,
  "two_factor_authentication": false,
  "plan": {
    "name": "free",
    "space": 976562499,
    "collaborators": 0,
    "private_repos": 10000
  }
}
```

### 2. Fetch Repo Details

**Endpoint:**

```
GET /github/:repo
```

**Description:**
Fetch Details of a specific git repo.

**Response**
```json
{
  "id": 934228304,
  "node_id": "R_kgDON68xUA",
  "name": "picsmate",
  "full_name": "devMainak/picsmate",
  "private": false,
  "owner": {
    "login": "devMainak",
    "id": 137388933,
    "node_id": "U_kgDOCDBjhQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/137388933?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/devMainak",
    "html_url": "https://github.com/devMainak",
    "followers_url": "https://api.github.com/users/devMainak/followers",
    "following_url": "https://api.github.com/users/devMainak/following{/other_user}",
    "gists_url": "https://api.github.com/users/devMainak/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/devMainak/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/devMainak/subscriptions",
    "organizations_url": "https://api.github.com/users/devMainak/orgs",
    "repos_url": "https://api.github.com/users/devMainak/repos",
    "events_url": "https://api.github.com/users/devMainak/events{/privacy}",
    "received_events_url": "https://api.github.com/users/devMainak/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
  },
  "html_url": "https://github.com/devMainak/picsmate",
  "description": null,
  "fork": false,
  "url": "https://api.github.com/repos/devMainak/picsmate",
  "forks_url": "https://api.github.com/repos/devMainak/picsmate/forks",
  "keys_url": "https://api.github.com/repos/devMainak/picsmate/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/devMainak/picsmate/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/devMainak/picsmate/teams",
  "hooks_url": "https://api.github.com/repos/devMainak/picsmate/hooks",
  "issue_events_url": "https://api.github.com/repos/devMainak/picsmate/issues/events{/number}",
  "events_url": "https://api.github.com/repos/devMainak/picsmate/events",
  "assignees_url": "https://api.github.com/repos/devMainak/picsmate/assignees{/user}",
  "branches_url": "https://api.github.com/repos/devMainak/picsmate/branches{/branch}",
  "tags_url": "https://api.github.com/repos/devMainak/picsmate/tags",
  "blobs_url": "https://api.github.com/repos/devMainak/picsmate/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/devMainak/picsmate/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/devMainak/picsmate/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/devMainak/picsmate/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/devMainak/picsmate/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/devMainak/picsmate/languages",
  "stargazers_url": "https://api.github.com/repos/devMainak/picsmate/stargazers",
  "contributors_url": "https://api.github.com/repos/devMainak/picsmate/contributors",
  "subscribers_url": "https://api.github.com/repos/devMainak/picsmate/subscribers",
  "subscription_url": "https://api.github.com/repos/devMainak/picsmate/subscription",
  "commits_url": "https://api.github.com/repos/devMainak/picsmate/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/devMainak/picsmate/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/devMainak/picsmate/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/devMainak/picsmate/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/devMainak/picsmate/contents/{+path}",
  "compare_url": "https://api.github.com/repos/devMainak/picsmate/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/devMainak/picsmate/merges",
  "archive_url": "https://api.github.com/repos/devMainak/picsmate/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/devMainak/picsmate/downloads",
  "issues_url": "https://api.github.com/repos/devMainak/picsmate/issues{/number}",
  "pulls_url": "https://api.github.com/repos/devMainak/picsmate/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/devMainak/picsmate/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/devMainak/picsmate/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/devMainak/picsmate/labels{/name}",
  "releases_url": "https://api.github.com/repos/devMainak/picsmate/releases{/id}",
  "deployments_url": "https://api.github.com/repos/devMainak/picsmate/deployments",
  "created_at": "2025-02-17T13:39:45Z",
  "updated_at": "2025-03-06T14:51:39Z",
  "pushed_at": "2025-03-06T14:51:35Z",
  "git_url": "git://github.com/devMainak/picsmate.git",
  "ssh_url": "git@github.com:devMainak/picsmate.git",
  "clone_url": "https://github.com/devMainak/picsmate.git",
  "svn_url": "https://github.com/devMainak/picsmate",
  "homepage": null,
  "size": 133,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": true,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "has_discussions": false,
  "forks_count": 0,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 0,
  "license": null,
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [ ],
  "visibility": "public",
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "main",
  "permissions": {
    "admin": true,
    "maintain": true,
    "push": true,
    "triage": true,
    "pull": true
  },
  "temp_clone_token": "",
  "allow_squash_merge": true,
  "allow_merge_commit": true,
  "allow_rebase_merge": true,
  "allow_auto_merge": false,
  "delete_branch_on_merge": false,
  "allow_update_branch": false,
  "use_squash_pr_title_as_default": false,
  "squash_merge_commit_message": "COMMIT_MESSAGES",
  "squash_merge_commit_title": "COMMIT_OR_PR_TITLE",
  "merge_commit_message": "PR_TITLE",
  "merge_commit_title": "MERGE_MESSAGE",
  "security_and_analysis": {
    "secret_scanning": {
      "status": "enabled"
    },
    "secret_scanning_push_protection": {
      "status": "enabled"
    },
    "dependabot_security_updates": {
      "status": "disabled"
    },
    "secret_scanning_non_provider_patterns": {
      "status": "disabled"
    },
    "secret_scanning_validity_checks": {
      "status": "disabled"
    }
  },
  "network_count": 0,
  "subscribers_count": 1
}
```

### 2. Create a Repo Issue

**Endpoint:**

```
POST /github/:repo/issues
```

**Description:**
Create an issue for a specific repo.

**Request Body:**

```
{
    "title": "refactor: improved backend folder structure",
    "body": "### Description\nCreated a better folder structure for understanding and navigating."
}
```

**Response**

```json
{
    "issus_url": "https://github.com/devMainak/ThePoll-app/issues/1"
}
```

## Error Responses

Common error responses for all endpoints:
- `500 Internal Server Error` - Server encountered an error.

**Author:** Mainak Das
**Last Updated:** 2025-03-09
