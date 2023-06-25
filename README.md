Slackからパブリックチャンネルの全リストを取得するNode.jsスクリプト

- SLACK_USER_TOKEN
- SLACK_SIGNING_SECRET

以上二つを用意。スコープは。

https://api.slack.com/methods/conversations.list

を参照のこと。

- channels:read
- groups:read
- im:read
- mpim:read

のスコープで動くはず。

macOS/Linux:
```
env SLACK_USER_TOKEN="xoxp-xxxxxxxxxxxxxx" SLACK_SIGNING_SECRET="999999999999" node index.js
```

Windows:
```
& { $env:SLACK_USER_TOKEN="xoxp-xxxxxxxxxxxxxx"; 
$env:SLACK_SIGNING_SECRET="999999999999"; node .\index.js }
```