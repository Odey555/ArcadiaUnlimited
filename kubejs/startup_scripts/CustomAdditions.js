// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('block', arcadia => {
	
	
})

StartupEvents.registry('fluid', arcadia => {
	
	arcadia.create('liquid_arcadium').displayName('Liquid Arcadium').stillTexture('kubejs:fluid/liquid_arcadium').flowingTexture('kubejs:fluid/liquid_arcadium')
	
	arcadia.create('activated_redstone', 'thin')
		.displayName('Activated Redstone')
		.stillTexture('kubejs:fluid/potion_still')
		.flowingTexture('kubejs:fluid/potion_flow')
		.tint(0xFF0000)
		.noBlock()
	
	
})

StartupEvents.registry('item', arcadia => {
	//arcadia.create()
	arcadia.create('darkmedolite_inert').displayName('Dark Medolite').texture('kubejs:item/darkmedolite_inert')
	arcadia.create('darkmedolite_charging').displayName('Charging Dark Medolite').texture('kubejs:item/darkmedolite_charging')
	arcadia.create('darkmedolite_full').displayName('Awakened Dark Medolite').texture('kubejs:item/darkmedolite_full')
	
	arcadia.create('exotic_matter').displayName('Exotic Matter Chunk').texture('kubejs:item/exotic_matter_chunk')
	
	
	
	arcadia.create('unstable_arcana_crystal').displayName('Unstable Arcana Crystal').texture('apotheosis:items/gems/inferno')
	arcadia.create('crystalrock_chunk').displayName('Crystal Rock Chunk').texture('kubejs:item/crystal_cyanrock')
	
	arcadia.create('quadlion_emitter_infused').displayName('Arcanum-Infused Quadlion Emitter').texture('kubejs:item/part_electronic_magic_circuit')
	arcadia.create('modulum_circuit_infused').displayName('Ender-Infused Modulum Circuit').texture('kubejs:item/part_electronic_circuit_blue')
	arcadia.create('marvium_unit').displayName('Pulsating Marvium Unit').texture('kubejs:item/part_electronic_ender_core')
	
	arcadia.create('gold_board').displayName('Gold-Plated Circuit Board').texture('kubejs:item/part_electronic_circuit_integrated')
	arcadia.create('gold_board_broken').displayName('Smashed Gold-Plated Circuit Board').texture('kubejs:item/part_electronic_circuit_green_broken')
	
	
	
})