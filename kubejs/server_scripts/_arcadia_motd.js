PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to Odey's ", "§d§oArcadia Unlimited", " server!"]);
    event.player.tell(["Please wait a few seconds for the FPS to stabalize!"]);
    event.player.tell(["Please report any issues to Odey ", Text.gold("via Discord"), "."]);
})