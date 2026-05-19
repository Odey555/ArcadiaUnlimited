ServerEvents.tags('item', arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {
	
	/**
	* =========================================
	*    DUPLICATE/ UNNECESSARY RECIPE REMOVAL
	* =========================================
	*/
    
	//arcadia.remove({ id: 'minecraft:mushroom_stew' })
	//arcadia.remove({ id: 'minecraft:rabbit_stew_from_brown_mushroom' })
	
	// Stone TOOLS now require STONE instead of cobble
	const stoneTools = 
	[
        'minecraft:stone_sword',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_shovel',
        'minecraft:stone_hoe'
	]
    stoneTools.forEach((item) =>
        arcadia.replaceInput({ output: item },'minecraft:cobblestone','minecraft:stone'));
	
	
	// Netherite can't be hand-crafted anymore, it requires some type of machinery //
	
	arcadia.remove({ id: 'minecraft:netherite_ingot' })
	arcadia.remove({ id: 'create_deep_dark:create/compacting_netherite' })
	
	arcadia.custom({
		'type': 'create:sequenced_assembly',
		'ingredient': { 'item': 'minecraft:netherite_scrap' },
		'results': [{ 'id': 'minecraft:netherite_ingot' }],
		'sequence': [
			{
				'type': 'create:deploying',
				'ingredients': [ {'item': 'minecraft:netherite_scrap'}, {'tag': 'c:plates/gold'} ],
				'results': [{'id': 'minecraft:netherite_scrap'}]
			},
			{
				'type': 'create:deploying',
				'ingredients': [ {'item': 'minecraft:netherite_scrap'}, {'tag': 'c:plates/gold'} ],
				'results': [{'id': 'minecraft:netherite_scrap'}]
			},
			{
				'type': 'create:deploying',
				'ingredients': [ {'item': 'minecraft:netherite_scrap'}, {'tag': 'c:plates/gold'} ],
				'results': [{'id': 'minecraft:netherite_scrap'}]
			},
			{
				'type': 'create:pressing',
				'ingredients': [ {'item': 'minecraft:netherite_scrap'} ],
				'results': [{'id': 'minecraft:netherite_ingot'}]
			},
		],
		'transitional_item': { 'id': 'minecraft:netherite_scrap' }
	})
	
	// Harder Myst Ag Netherite crafting 
	arcadia.remove({ id: 'mysticalagriculture:essence/minecraft/netherite_ingot' })
	arcadia.shaped('createdeco:netherite_nugget', [ 'AAA', 'AAA', 'AAA' ], { A: 'mysticalagriculture:netherite_essence' })
	
	// Ender chest now requires a gold sheet. The chest texture has a golden lock so why not?
	arcadia.shaped('minecraft:ender_chest',
		[
			'ABA',
			'ACA',
			'AAA'
		],
		{A: 'minecraft:obsidian', B: '#c:plates/gold', C: 'minecraft:ender_eye'})
	

	arcadia.remove({ id: 'minecraft:soul_lantern' }) // Soul lanterns can now only be acquired by haunting or casting
	arcadia.replaceInput(
	{
		output: 'minecraft:lantern' },
		'minecraft:iron_nugget',
		'minecraft:iron_ingot'
	)
	
	arcadia.replaceInput({ output: 'industrialforegoing:mycelial_meatallurgic' },'#c:ingots','#c:ingots/platinum')
	
	
	/**
	* =========================================
	*    ARCADIA CUSTOM ITEMS
	* =========================================
	*/
	arcadia.custom({
		type: 'create:mechanical_crafting',
		category: 'misc',
		key: {
			A: {'item': 'mekanism:alloy_atomic'},
			B: {'item': 'oritech:dubios_container'},
			C: {'item': 'extendedae:entro_block'},
			U: {'item': 'kubejs:unstable_arcana_crystal'},
			O: {'item': 'minecraft:crying_obsidian'},
		},
		pattern: [
			'AAUAA',
			'AOCOA',
			'UCBCU',
			'AOCOA',
			'AAUAA'
		],
		result: {id: 'kubejs:exotic_matter'}
	})
	
    // PotionsMaster ender powder now compatible with all ender pearls
	arcadia.replaceInput({ id: 'potionsmaster:ender_powder' },'minecraft:ender_pearl','#c:ender_pearls')
	
	
	
	
	
	
	
})