const start = Date.now();

const { App } = require('@slack/bolt');
(async () => {
    const app = new App({
        token: process.env.SLACK_USER_TOKEN,
        signingSecret: process.env.SLACK_SIGNING_SECRET
    });

    const channels = [];
    const result = await app.client.conversations.list({
        exclude_archived : true,
        limit : 1000,
        types : 'public_channel'
    });
    result.channels.forEach(channel => {channels.push(channel);});

    let nextCursor = result.response_metadata.next_cursor;
    while (nextCursor) {
        console.log({nextCursor});
        const result = await app.client.conversations.list({
            exclude_archived : true,
            limit : 1000,
            types : 'public_channel',
            cursor: nextCursor 
        });
        result.channels.forEach(channel => {channels.push(channel);});
        nextCursor = result.response_metadata.next_cursor;
    }

    const time = Date.now() - start;
    console.log(`Time: ${time/1000}s`);
    console.log(channels.length);
})();

