
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
	
	
	// Remove TFMG troublesome items
	arcadia.remove('tfmg:empty_spool')
	arcadia.remove('tfmg:copper_spool')
	arcadia.remove('tfmg:constantan_spool')
	arcadia.remove('tfmg:aluminum_spool')
	arcadia.remove('tfmg:winding_machine')
	arcadia.remove('tfmg:unfinished_electromagnetic_coil')
	
	
	
	// Remove duplicate gears
    arcadia.remove('industrialforegoing:iron_gear')
    arcadia.remove('industrialforegoing:gold_gear')
    arcadia.remove('industrialforegoing:diamond_gear')
	
	// Remove useless Oritech clumps
	arcadia.remove('oritech:small_gold_clump')
	arcadia.remove('oritech:small_copper_clump')
	arcadia.remove('oritech:small_iron_clump')
	arcadia.remove('oritech:small_nickel_clump')
	arcadia.remove('oritech:small_platinum_clump')
	arcadia.remove('oritech:gold_clump')
	arcadia.remove('oritech:copper_clump')
	arcadia.remove('oritech:iron_clump')
	arcadia.remove('oritech:nickel_clump')
	arcadia.remove('oritech:platinum_clump')
	
	//arcadia.remove('farmersdelight:food/ender_congee')
	arcadia.remove('ends_delight:bubble_tea')
	//arcadia.remove('arsdelight:cooking/cooking/wilden_sauce')
	arcadia.remove('mekmm:author_doll')
	arcadia.remove('oritech:small_platinum_clump')
	
	// Remove Create: Food compat recipes that have no uses
	arcadia.remove('createfood:raw_snickerdoodle')
	arcadia.remove('createfood:raw_sugar_cookie')
	arcadia.remove('createfood:raw_green_tea_cookie')
	
	console.log('RecipeViewer.js executed')
})