//Priority: 50





LootJS.modifiers((arcadia) => {
	
	/**
	* =========================================
	*    MODS & SPECIAL ITEMS (NERFS)
	* =========================================
	*/
	const modNerf = arcadia.addTableModifier([LootType.CHEST, LootType.VAULT])

	// General mods nerf (5% drop rate)
	modNerf.removeLoot([
		"@irons_spellbooks"/*,
		"@ars_nouveau",
		"@simplyswords"*/
	]).randomChance(0.95)

	// Sophisticated Backpacks nerf (15% drop rate)
	arcadia.addTableModifier([LootType.CHEST, LootType.VAULT])
	.removeLoot("@sophisticatedbackpacks")
	.randomChance(0.85)

	// Pneumaticraft Removal (0% drop rate)
	arcadia.addTableModifier([LootType.CHEST, LootType.VAULT])
	.removeLoot("@pneumaticcraft")
	
	console.info("[AU] Loot Modifiers loaded and applied")
})