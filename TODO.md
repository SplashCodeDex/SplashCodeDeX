# GitHub Profile Setup Guide

This guide will walk you through the final steps to activate all the dynamic features of your new GitHub profile.

## Step 1: Fill in Placeholders in `README.md`

Open the `README.md` file and replace all the placeholder values (like `[YOUR_USERNAME]`, `[YOUR_NAME]`, etc.) with your personal information.

**Placeholders to update:**
*   `[YOUR_NAME]`
*   `[YOUR_TITLE]`
*   `[YOUR_USERNAME]`
*   Your social media handles (`[YOUR_TWITTER_HANDLE]`, `[YOUR_LINKEDIN_USERNAME]`, etc.)

## Step 2: Configure the GitHub Actions Workflows

You have two workflow files in the `.github/workflows/` directory. You need to update the placeholders in both.

### In `.github/workflows/profile-update.yml`:
*   Replace `[YOUR_USERNAME]` with your GitHub username.
*   Replace `[YOUR_BLOG_RSS_FEED_URL]` with the RSS feed URL of your blog. If you don't have one, you can remove the `update-blog-posts` job from the file.

### In `.github/workflows/dynamic-content.yml`:
*   Replace `[YOUR_USERNAME]` with your GitHub username.
*   Replace `[YOUR_WAKATIME_USERNAME]` with your WakaTime username.

## Step 3: Set Up WakaTime Integration

1.  **Create a WakaTime Account:** Go to [WakaTime.com](https://wakatime.com/), sign up for a free account, and follow the instructions to set up the plugin in your code editor (e.g., VS Code, JetBrains).
2.  **Find Your API Key:** Go to your WakaTime [Account Settings](https://wakatime.com/settings/account) and copy your **API Key**.
3.  **Create GitHub Secret:**
    *   In your GitHub repository, go to `Settings > Secrets and variables > Actions`.
    *   Click `New repository secret`.
    *   Name the secret `WAKATIME_API_KEY`.
    *   Paste your WakaTime API Key into the value field and save.

## Step 4: Set Up Spotify Integration

This is the most involved step. You need to create a Spotify App to get the necessary credentials.

1.  **Get Spotify Credentials:** Follow this excellent, detailed guide to get your Spotify **Client ID**, **Client Secret**, and **Refresh Token**: [Spotify README credentials guide](https://github.com/kittinan/spotify-github-profile#get-spotify-api-credentials).
2.  **Create GitHub Secrets:**
    *   In your GitHub repository, go to `Settings > Secrets and variables > Actions`.
    *   Create the following three secrets:
        *   `SPOTIFY_CLIENT_ID`: Your Spotify Client ID.
        *   `SPOTIFY_CLIENT_SECRET`: Your Spotify Client Secret.
        *   `SPOTIFY_REFRESH_TOKEN`: Your Spotify Refresh Token.

## Step 5: Commit and Push Your Changes

Once you've filled in all the placeholders and created the secrets, commit all the changes and push them to your GitHub repository. The GitHub Actions will trigger automatically, and your profile will come to life within a few minutes.

---

That's it! Once you've completed these steps, your profile will be fully automated.
