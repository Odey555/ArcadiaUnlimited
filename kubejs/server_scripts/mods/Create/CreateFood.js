ServerEvents.tags("item", arcadia => {
	
})


ServerEvents.recipes(arcadia => {
	// Remove Create: Food compat recipes that have no uses
	
	//arcadia.remove({ id: '' })
	/*arcadia.remove({ output: 'createfood:raw_snickerdoodle' })
	arcadia.remove({ output: 'createfood:raw_sugar_cookie' })
	arcadia.remove({ output: 'createfood:raw_green_tea_cookie' })
	
	arcadia.remove({ output: 'createfood:ube_cream_frosting_bottle' })
	arcadia.remove({ output: 'createfood:ube_cream_frosting' })
	arcadia.remove({ output: 'createfood:ube_cream_frosting_bucket' })
	arcadia.remove({ output: 'createfood:ube_cream_frosting_piping_bag' })
	arcadia.remove({ output: 'createfood:ube_cream_ube_cake' })
	arcadia.remove({ output: 'createfood:ube_cream_ube_cake_slice' })
	arcadia.remove({ output: 'createfood:ube_sugar_dough_egg' })
	arcadia.remove({ output: 'createfood:ube_sugar_dough' })
	arcadia.remove({ output: 'createfood:ube_cake_base' })
	arcadia.remove({ output: 'createfood:raw_ube_cookie' })
	arcadia.remove({ output: 'createfood:raw_ube_cake_base' })
	
	arcadia.remove('createfood:ube_sugar_dough')
	arcadia.remove('createfood:ube_cream_frosting_bottle')
	arcadia.remove('createfood:ube_cream_frosting')
	arcadia.remove('createfood:ube_cream_frosting_bucket')
	arcadia.remove('createfood:ube_cream_frosting_piping_bag')
	arcadia.remove('createfood:ube_cream_ube_cake')
	arcadia.remove('createfood:ube_cream_ube_cake_slice')
	arcadia.remove('createfood:ube_sugar_dough_egg')
	arcadia.remove('createfood:ube_sugar_dough')
	arcadia.remove('createfood:ube_cake_base')
	arcadia.remove('createfood:raw_ube_cookie')
	arcadia.remove('createfood:raw_ube_cake_base')
	arcadia.remove('createfood:raw_snickerdoodle')
	arcadia.remove('createfood:raw_sugar_cookie')
	arcadia.remove('createfood:raw_green_tea_cookie')
	arcadia.remove('createfood:minecraft/crafting/pink_gelatin_dessert_block_from_crafting')
	*/
	
	/*const foods = ['apple_cream_chocolate_pastry', 'apple_cream_cupcake',
	'apple_cream_dark_chocolate', 'apple_cream_donut', 'apple_cream_sweet_roll',
	'apple_cream_mini_waffle', 'apple_cream_pastry', 
	'apple_cream_white_chocolate',	'apple_ice_cream_cone',	
	'apple_jam_sandwich', 'apple_popsicle',	'bacon_sandwich', 'bacon_sandwich_lettuce',
	'bacon_sandwich_lettuce_tomato', 'beef_bun_bacon', 'beef_bun_bacon_lettuce',
	'beef_bun_bacon_lettuce_tomato',	'beef_bun_bacon_lettuce_tomato',	
	'beef_bun_cheese_bacon', 'beef_bun_cheese_bacon', 'beef_bun_cheese_bacon_lettuce', 'beef_bun_cheese_bacon_lettuce_tomato',
	'beef_bun_cheese', 'beef_bun_cheese_lettuce', 'beef_bun_cheese_lettuce_tomato', 'beef_bun_cheese_onion_bacon',
	'beef_bun_cheese_onion_bacon_lettuce', 'beef_bun_cheese_onion', 'beef_bun_cheese_onion', 'beef_bun_cheese_onion_lettuce',
	'beef_bun_cheese_onion_lettuce_tomato', 'beef_bun_cheese_onion_lettuce_tomato'
	
	]
	foods.forEach(type => {
        const useless = `createfood:minecraft/crafting/shaped/${type}_from_shaped`

        // Remove recipes
        arcadia.remove({ id: useless })
	})
	
	
	arcadia.remove({ id: 'createfood:minecraft/crafting/beerry_jam_sandwich_from_shaped' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/apple_cream_cake_from_shaped' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/apple_cream_chocolate_cupcake_from_shaped' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/apple_cream_chocolate_donut_from_shaped' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/apple_cream_chocolate_from_shaped' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/bacon_sandwich_lettuce_from_shaped_alt_2' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_bacon_lettuce_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_bacon_lettuce_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_bacon_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_onion_bacon_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_onion_bacon_lettuce_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_onion_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_onion_lettuce_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })
	arcadia.remove({ id: 'createfood:minecraft/crafting/shaped/beef_bun_cheese_lettuce_tomato_from_shaped_alt' })*/
	
	//arcadia.remove({ id: /^createfood:minecraft\/crafting\/shaped\// })
	
	
})