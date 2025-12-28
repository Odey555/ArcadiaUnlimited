ServerEvents.tags("item", arcadia => {

	//Dough
	arcadia.add("c:dough", "create:dough")
	arcadia.add("c:dough/dough", "create:dough")
	arcadia.add("c:foods/dough", "create:dough")
    
    //The Factory Must Grow - Blast Stove fuel compat
    //arcadia.add('immersiveengineering:creosote','tfmg:blast_stove_fuel')
    //arcadia.add('modern_industrialization:coke_dust','tfmg:blast_furnace_fuel')
	
  
})


ServerEvents.recipes(arcadia => {

    //arcadia.remove({id: 'createfood:minecraft/crafting/pasta_plate_eggplant_from_crafting'})
    //arcadia.remove({id: 'createfood:minecraft/crafting/shaped/pasta_plate_eggplant_from_shaped'})
    arcadia.remove('tfmg:sequenced_assembly/heavy_plate')
    arcadia.remove('farmersdelight:tree_bark')
    arcadia.remove({ output: 'farmersdelight:tree_bark' })
    /*arcadia.remove({ id: 'garnished_additions:item_application/refined_radiance_casing_from_log_using_deployer' })
    arcadia.remove({ id: 'garnished_additions:item_application/refined_radiance_casing_from_wood_using_deployer' })
    arcadia.remove({ id: 'garnished_additions:item_application/shadow_steel_casing_from_log_using_deployer' })
    arcadia.remove({ id: 'garnished_additions:item_application/shadow_steel_casing_from_wood_using_deployer' })*/

    
    // Replace log stripping recipes to exclude bark
    const logs = [
        'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
        'mangrove', 'cherry'/*, 'bamboo', 'crimson', 'warped'*/
		]

    logs.forEach(type => {
        const log = `minecraft:${type}_log`
        const stripped = `minecraft:stripped_${type}_log`
        const runtimeId = `create:cutting/runtime_generated/compat/minecraft/${type}_log_to_stripped_${type}_log`

        // Remove runtime-generated bark recipe
        arcadia.remove({ id: runtimeId })

        // Re-add the stripped log cutting recipe WITHOUT tree bark
        arcadia.custom({
            type: 'create:cutting',
            ingredients: [{ item: log }],
            processing_time: 20,
            results: [{ id: stripped }]
        }).id(`kubejs:cutting/stripped_${type}_log`)
    })
	
	
	arcadia.custom({
		type: "create:crushing",
		ingredients: [{item: "minecraft:quartz"}],
		processing_time: 150,
		results: [
		{
			count: 1,
			id: "mekanism:dust_quartz"
		},
		{
			chance: 0.3,
			id: "create:experience_nugget"
		}]
	})


	
    
    //////////  TFMG  //////////  
    
	arcadia.custom({
	type: "create:deploying",
	ingredients: [{ tag: "immersiveengineering:treated_wood" }, { tag: "c:ingots/steel" }],
	results: [{ id: "tfmg:steel_casing" }],
	})
	
	arcadia.custom({
	type: "create:deploying",
	ingredients: [{ item: "minecraft:barrel" }, { tag: "c:plates/iron" }],
	keep_held_item: false,
	results: [{ id: "create:item_vault" }],
	})
    
    arcadia.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            { "tag": "c:ingots/nickel" },
            { "tag": "c:ingots/nickel" },
            { "tag": "c:ingots/silicon" },
            { "tag": "c:ingots/steel" },
            { "tag": "c:ingots/steel" }
        	],
        "processing_time": 300,
        "results": [{ "count": 2, "id": "tfmg:magnetic_alloy_ingot"}]
	})
    
    // TFMG renewable Bauxite & Galena
    arcadia.custom({
        "type": "create:mixing",
        "ingredients": [
            { "tag": "c:dusts/sulfur" },
            { "tag": "c:dusts/lead" },
            { "type": "neoforge:single",
             "amount": 500,
             "fluid": "minecraft:lava"
            }
        ],
        "processing_time": 500,
        "results": [{ "id": "tfmg:galena"}]
    })
    
    arcadia.custom({
        "type": "create:mixing",
        "heat_requirement": "heated",
        "ingredients": [
            { "tag": "c:ingots/aluminum" },
            { "tag": "c:ingots/aluminum" },
            { "type": "neoforge:single",
             "amount": 400,
             "fluid": "minecraft:water"
            }
        ],
        "processing_time": 500,
        results: [{ id: "tfmg:bauxite"}]
    })
    
    // TFMG simpler liquid silicon 
    // AE2 silicon is very abundant, only makes sense that it should be compatible
	arcadia.custom({
        "type": "create:compacting",
        "heat_requirement": "heated",
        "ingredients": [
            { "item": "ae2:silicon" },
            { "item": "ae2:silicon" },
            { "item": "ae2:silicon" },
            { "item": "ae2:silicon" }
            ],
        "results": [
        {
        	"amount": 80, "id": "tfmg:liquid_silicon"
        }
        ]
	})

    
})