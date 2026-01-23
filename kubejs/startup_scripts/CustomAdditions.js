// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

StartupEvents.registry('fluid', arcadia => {
	
	arcadia.create('liquid_arcadium').displayName('Liquid Arcadium').stillTexture('kubejs:fluid/liquid_arcadium').flowingTexture('kubejs:fluid/liquid_arcadium')
	
	arcadia.create('activated_redstone', 'thin')
		.displayName('Activated Redstone')
		.stillTexture('kubejs:fluid/potion_still')
		.flowingTexture('kubejs:fluid/potion_flow')
		.tint(0xFF0000)
		.noBlock()
	
	
})