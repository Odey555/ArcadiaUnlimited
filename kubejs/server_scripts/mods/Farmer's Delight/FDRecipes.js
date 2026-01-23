

ServerEvents.recipes(arcadia => {
	
	arcadia.remove('ends_delight:food/ender_congee')
	arcadia.remove('ends_delight:food/bubble_tea')
	
	// Ender congee with altered input
	arcadia.custom({
		type: "farmersdelight:cooking",
			container: {
				count: 1,
				id: "minecraft:bowl"},
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{ 
					tag: "c:crops/rice"
				},
				{
					item:"ends_delight:dried_endermite_meat"
				},
				{
					tag:"endersdelight:enderman_loot"
				}
			],
			recipe_book_tab: "misc",
			result: {count: 1, id: "ends_delight:ender_congee"}
	})	
	
	arcadia.custom({
		type: "farmersdelight:cooking",
			container: {count: 1,id: "minecraft:glass_bottle"},
			cookingtime: 200,
			experience: 1.0,
			ingredients: [
				{tag: "c:foods/milk"},
				{tag:"c:fruits/chorusfruit"},
				{tag:"endersdelight:enderman_loot"}
			],
			recipe_book_tab: "misc",
			result: {count: 1, id: "ends_delight:bubble_tea"}
	})
	
})