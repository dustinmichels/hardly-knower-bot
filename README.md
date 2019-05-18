# hardly-knower-bot

A twitter bot that makes "I hardly know her!" jokes at strangers.

## Setup

### Install stuff

```bash
# Make sure clasp & typescript are installed globally
npm install -g typescript
npm install -g @google/clasp

# install GAS types locally
npm i -S @types/google-apps-script
```

### Point at Google Apps Script

- Create a Google Apps Script
- Update `.clasp.json`.
  - `mv .clasp.template.json .clasp.json`
  - Fill in script id

### Twitter API

Aquire Twitter API keys and add them to `GAS/keys.js`
