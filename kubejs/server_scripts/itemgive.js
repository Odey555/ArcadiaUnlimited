PlayerEvents.loggedIn(event => {
    const pData = event.player.persistentData

    // Check if the player has NOT joined before
    if (!pData.firstJoin) {
    pData.firstJoin = true // Mark them as having joined

    // Give multiple items or specific quantities
    event.player.give('1x silentgear:blueprint_book')
    event.player.give('1x ftbquests:book')
	}
})