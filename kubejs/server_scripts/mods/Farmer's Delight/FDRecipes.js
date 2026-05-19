ServerEvents.recipes(arcadia => {
    
    /*
	* =================================================
	*    EDITING RECIPES FOR FARMER'S DELIGHT & ADDONS
	* =================================================
	*/
    
	//arcadia.remove({ id: 'culturaldelights:beef_burrito' })
	//arcadia.remove({ id: 'culturaldelights:pork_wrap' })
	arcadia.replaceInput({ id: 'culturaldelights:calamari_roll' },'culturaldelights:raw_calamari','#c:calamari')
	//arcadia.replaceInput({ id: 'culturalrecipes:pork_wrap' },'#c:cooked_pork','#c:foods/cooked_pork')
    
	//arcadia.remove({ id: 'farmersdelight:cutting/clam' })
	//arcadia.remove({ id: 'crabbersdelight:cutting/clam' })
	arcadia.remove({ id: 'minersdelight:insect_wrap' })
	arcadia.shaped('minersdelight:insect_wrap',
		['AA','B '],
		{A: '#minersdelight:raw_insect_meat', B: '#c:tortillas'})
    
    
    const cultRecipes = ['tortilla_chips', 'empanada', 'hearty_salad', 'eggplant_burger', 'avocado_toast', 'chicken_taco', 'tortilla_chips', 'fish_taco', 'calamari_roll']
    cultRecipes.forEach(item => {
		const cultNames = `culturalrecipes:${item}`
		arcadia.remove({ id: cultNames})
	})
    
    
    
    
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
				{ tag: "c:crops/rice" },
				{ item:"ends_delight:dried_endermite_meat" },
				{ tag:"endersdelight:enderman_loot" }
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
				{ tag: "c:foods/milk" },
				{ tag:"c:fruits/chorusfruit" },
				{ tag:"endersdelight:enderman_loot" }
			],
			recipe_book_tab: "misc",
			result: {count: 1, id: "ends_delight:bubble_tea"}
	})
    
    // Adding the Croptopia cabbage to make cabbage leafs
    arcadia.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [{ "item": "croptopia:cabbage" }],
        "result": [
            {
                "item": { "count": 2, "id": "farmersdelight:cabbage_leaf" }
            }
        ],
        "tool": [{ "type": "farmersdelight:item_ability", "action": "knife_dig"}, {"tag": "c:tools/knife" }]
    })
	
})