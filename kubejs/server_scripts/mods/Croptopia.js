ServerEvents.tags('item', arcadia => {
	
	//Dough
	arcadia.add('c:dough', 'farmersdelight:wheat_dough')
	arcadia.add('c:dough/dough', 'farmersdelight:wheat_dough')
	
	//Delight addons compat
	arcadia.add("endersdelight:enderman_loot", "ends_delight:ender_pearl_grain")
	arcadia.add("c:fruits/chorusfruit", "ends_delight:chorus_fruit_grain")
	//arcadia.add("c:foods/bat_wing", "ars_nouveau:wilden_wing")
	
	//Raw Meat
	arcadia.add("c:rawmeats", "farmersdelight:minced_beef")
	arcadia.add("c:rawmeats", "farmersdelight:mutton_chops")
	
	arcadia.add('c:cheeses', [
		'refurbished_furniture:cheese',
		'expanded_delight:cheese_slice',
		'expanded_delight:cheese_wheel',
		'expanded_delight:goat_cheese_slice',
		'expanded_delight:goat_cheese_wheel',
		'pizzadelight:cheese',
		'create_bic_bit:unripe_cheese_wedge',
		'create_bic_bit:young_cheese_wedge',
		'create_bic_bit:aged_cheese_wedge'
		])
  
})
