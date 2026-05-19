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
    
	arcadia.add("minecraft:mineable/axe", "pizzadelight:pizza_station")
	arcadia.add("minecraft:mineable/paxel", "pizzadelight:pizza_station")
    
    arcadia.add('c:crops/tomato', 'someassemblyrequired:tomato_slices')
  
})
