ServerEvents.tags('item', allthemods => {
	
	//Dough
	allthemods.add('c:dough', 'farmersdelight:wheat_dough')
	allthemods.add('c:dough/dough', 'farmersdelight:wheat_dough')
	
	//Delight addons compat
	allthemods.add("endersdelight:enderman_loot", "ends_delight:ender_pearl_grain")
	allthemods.add("c:fruits/chorusfruit", "ends_delight:chorus_fruit_grain")
	//allthemods.add("c:foods/bat_wing", "ars_nouveau:wilden_wing")
	
	//Raw Meat
	allthemods.add("c:rawmeats", "farmersdelight:minced_beef")
	allthemods.add("c:rawmeats", "farmersdelight:mutton_chops")
  
})
