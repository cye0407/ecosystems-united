# LinkedIn API Setup for Airlock

LinkedIn's API is more restrictive than other platforms. Here's the path to get posting working.

## Step 1: Create a LinkedIn App

1. Go to https://www.linkedin.com/developers/
2. Click "Create App"
3. Fill in:
   - App name: "Ecosystems United Publisher" (or whatever)
   - LinkedIn Page: You'll need a LinkedIn Company Page (you may need to create one)
   - App logo: Upload your logo
   - Accept terms
4. Click Create

## Step 2: Request the Right API Product

This is the critical step. LinkedIn has multiple API "products" with different permissions:

- **"Sign In with LinkedIn using OpenID Connect"** — This is the default. It only lets you authenticate users. NOT enough for posting.
- **"Share on LinkedIn"** — This is what you need. Gives you `w_member_social` scope to create posts.

To request it:
1. In your app dashboard, go to the **Products** tab
2. Find **"Share on LinkedIn"**
3. Click "Request Access"
4. LinkedIn usually auto-approves this within minutes

If "Share on LinkedIn" isn't available, look for **"Community Management API"** — same posting capability but also includes comment reading (needed for harvesting).

## Step 3: Set Up OAuth2 and Get Your Token

LinkedIn requires a 3-legged OAuth flow. Here's the manual way to get your first token:

### 3a. Get your Client ID and Secret
- Go to your app's **Auth** tab
- Note the **Client ID** and **Client Secret**
- Under "OAuth 2.0 scopes," confirm you see `w_member_social` and `openid` and `profile`

### 3b. Add a Redirect URL
- Still on the Auth tab, under "Authorized redirect URLs for your app"
- Add: `http://localhost:3577/auth/linkedin/callback` (or any URL you control)

### 3c. Generate the Authorization URL
Open this URL in your browser (replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI):

```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:3577/auth/linkedin/callback&scope=openid%20profile%20w_member_social
```

### 3d. Authorize and Grab the Code
- You'll be redirected to LinkedIn to approve
- After approval, you'll be redirected to your redirect URL with a `?code=XXXXX` parameter
- Copy that code (it expires in 30 minutes)

### 3e. Exchange Code for Access Token
Run this in your terminal (replace the values):

```bash
curl -X POST https://www.linkedin.com/oauth/v2/accessToken \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code" \
  -d "code=YOUR_CODE_HERE" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET" \
  -d "redirect_uri=http://localhost:3577/auth/linkedin/callback"
```

You'll get back JSON with:
```json
{
  "access_token": "AQV...(long string)",
  "expires_in": 5184000
}
```

That `expires_in` is 60 days (5,184,000 seconds).

### 3f. Add Token to Airlock Config

Open `C:\Users\User\Documents\CY\airlock\config.local.js` and set:

```js
linkedinAccessToken: "AQV...your token here",
```

The `linkedinAuthorUrn` will be auto-detected on first post.

## Step 4: Test It

```bash
cd C:\Users\User\Documents\CY\airlock
node src/cli.js status
```

Should show LinkedIn as connected.

## Token Refresh

The token expires every 60 days. LinkedIn offers refresh tokens if you requested them in the scope. If not, you'll need to redo Step 3c-3e every ~2 months.

To add refresh token support, include `offline_access` in the scope when generating the auth URL (not all apps are granted this).

## For Harvesting Comments

To read comments on your posts (the `airlock harvest` command), you need the **Community Management API** product, not just "Share on LinkedIn." Request it from the Products tab. It may require a brief review by LinkedIn.

Without it, you can still post — you just can't auto-harvest replies.
