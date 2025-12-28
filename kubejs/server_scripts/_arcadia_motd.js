PlayerEvents.loggedIn(event => {
    event.player.tell(["Welcome to ", Text.purple("Arcadia Unlimited"), "!"]);
    event.player.tell(["Please report any issues to ", Text.gold("the Github").underlined().clickOpenUrl("https://github.com/Odey555/ArcadiaUnlimited/issues").hover("Click to open"), "."]);
})