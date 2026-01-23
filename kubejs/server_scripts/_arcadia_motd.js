PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", "§d§oArcadia Unlimited", "!"]);
    event.player.tell(["Please wait a few seconds for the FPS to stabalize!"]);
    event.player.tell(["Please report any issues ", Text.gold("§6§nhere").underlined().clickOpenUrl("https://github.com/Odey555/ArcadiaUnlimited/issues").hover("Click to open"), "."]);
})