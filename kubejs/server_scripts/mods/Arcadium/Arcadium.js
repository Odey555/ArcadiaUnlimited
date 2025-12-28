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

})