ServerEvents.tags("item", arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {
	arcadia.remove({ id: 'create:conversion_4' }) // Remove Shadow Steel Mysterious Conversion
	arcadia.remove({ id: 'create:conversion_5' }) // Remove Refined Radiance Mysterious Conversion
	
	
	
	/*arcadia.custom({
		"type": "create_dragons_plus:ending",
		"ingredients": [{ "item": "create:chromatic_compound" }],
		"results": [{ "id": "create:shadow_steel" }]
	})
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "create:chromatic_compound"}, {"item": "minecraft:glowstone_dust"}, {"item": "minecraft:glowstone_dust"}],
		"results": [{"id": "create:refined_radiance"}]
	})*/
	
	
	/*arcadia.custom({
		"type": "create:mixing",
		"heat_requirement": "superheated",
		"ingredients": [
			{
				"type": "neoforge:single",
				"amount": 250,
				"fluid": "industrialforegoing:ether_gas"
			},
			{"item": "mysticalagradditions:insanium_block"},
			{"item": "mysticalagradditions:insanium_block"},
			{"item": "allthecompressed:antimatter_block_1x"}
		],
		"results": [{ "amount": 10, "id": "kubejs:liquid_arcadium" }]
	})*/
	
	arcadia.custom({
		type: 'create:mixing',
		heat_requirement: 'heated',
		ingredients:[
			{
				"type": "neoforge:single",
				"amount": 250,
				"fluid": "kubejs:activated_redstone"
			},
			{item: 'northstar:mars_deep_stone'}
		],
		results: [
		{ chance: 0.01, id: 'kubejs:unstable_arcana_crystal' },
		{ chance: 0.8, id: 'minecraft:netherite_scrap' }]
	})
})