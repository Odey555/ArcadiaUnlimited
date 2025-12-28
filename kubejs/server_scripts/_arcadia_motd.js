PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", "§d§oArcadia Unlimited", "!"]);
    event.player.tell(["Please report any issues to ", Text.gold("§6§nthe Github").underlined().clickOpenUrl("https://github.com/Odey555/ArcadiaUnlimited/issues").hover("Click to open"), "."]);
})