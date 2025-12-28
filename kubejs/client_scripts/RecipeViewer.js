
console.log('RecipeViewer.js read')

RecipeViewerEvents.removeEntriesCompletely('item', arcadia => {
	
	
	const metals = ['copper','brass','gold','industrial_iron','iron','netherite','zinc']

	metals.forEach(metal => {
	console.log(`Trying to remove createdeco:${metal}_coin`)
	console.log(`Trying to remove createdeco:${metal}_coinstack`)
	arcadia.remove(`createdeco:${metal}_coin`)
	arcadia.remove(`createdeco:${metal}_coinstack`)
	})
	
	// Remove Create Deco coins
	arcadia.remove('createdeco:copper_coin')
	arcadia.remove('createdeco:copper_coinstack')
	arcadia.remove('createdeco:brass_coin')
	arcadia.remove('createdeco:brass_coinstack')
	arcadia.remove('createdeco:gold_coin')
	arcadia.remove('createdeco:gold_coinstack')
	arcadia.remove('createdeco:industrial_iron_coin')
	arcadia.remove('createdeco:industrial_iron_coinstack')
	arcadia.remove('createdeco:iron_coin')
	arcadia.remove('createdeco:iron_coinstack')
	arcadia.remove('createdeco:netherite_coin')
	arcadia.remove('createdeco:netherite_coinstack')
	arcadia.remove('createdeco:zinc_coin')
	arcadia.remove('createdeco:zinc_coinstack')
	
	// Remove duplicate gears
    arcadia.remove({ id: 'industrialforegoing:iron_gear'})
    arcadia.remove({ id: 'industrialforegoing:gold_gear'})
    arcadia.remove({ id: 'industrialforegoing:diamond_gear'})
	
	// Remove useless Oritech clumps
	arcadia.remove({ id: 'oritech:small_iron_clump'})
	arcadia.remove({ id: 'oritech:small_gold_clump'})
	arcadia.remove({ id: 'oritech:small_copper_clump'})
	arcadia.remove({ id: 'oritech:small_nickel_clump'})
	arcadia.remove({ id: 'oritech:small_platinum_clump'})
	
	//arcadia.remove('farmersdelight:food/ender_congee')
	arcadia.remove('ends_delight:bubble_tea')
	//arcadia.remove('arsdelight:cooking/cooking/wilden_sauce')
	arcadia.remove('mekmm:author_doll')
	arcadia.remove({ id: 'oritech:small_platinum_clump'})
	
	
	console.log('RecipeViewer.js executed')
})