ServerEvents.tags("item", arcadia => {
	//Dough
	arcadia.add("c:dough", "create:dough")
	arcadia.add("c:dough/dough", "create:dough")
	arcadia.add("c:foods/dough", "create:dough")
	arcadia.add("c:fruits/strawberry", "berries_and_cherries:strawberry")
	arcadia.add("c:fruits/strawberry", "northstar:martian_strawberry")
    
    //arcadia.add('modern_industrialization:coke_dust','tfmg:blast_furnace_fuel')
	
})


ServerEvents.recipes(arcadia => {
	
	//arcadia.remove({ id: '' })
    
	arcadia.remove({ id: 'createdieselgenerators:crafting/chip_wood_block' })
    
	//arcadia.remove({ id: 'create:crafting/materials/rose_quartz' })
	arcadia.remove({ id: 'create_sa:quartz_gem_crushing' })
	
    //arcadia.remove({id: 'createfood:minecraft/crafting/pasta_plate_eggplant_from_crafting'})
    arcadia.remove({ id: 'tfmg:filling/hardened_planks' })
    arcadia.remove('farmersdelight:tree_bark')
    arcadia.remove({ output: 'farmersdelight:tree_bark' })
	
	arcadia.replaceInput({ id: 'tfmg:empty_spool_from_hardened_planks_stonecutting' }, 'tfmg:hardened_planks', '#immersiveengineering:treated_wood')
	//arcadia.replaceInput({ id: 'tfmg:vat_machine_recipe/rubber' }, 'tfmg:sulfur_dust', 'c:dusts/sulfur')
	
	
	// Replace log stripping recipes to exclude bark //
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
	// Replace log stripping recipes to exclude bark //
	
	
	arcadia.custom({
	type: "create:deploying",
	ingredients: [{ item: "minecraft:barrel" }, { tag: "c:plates/iron" }],
	keep_held_item: false,
	results: [{ id: "create:item_vault" }],
	})
	
	arcadia.custom({
		type: "create:crushing",
		ingredients: [{item: "minecraft:quartz"}],
		processing_time: 150,
		results: [
			{count: 1,id: "mekanism:dust_quartz"},
			{chance: 0.3,id: "create:experience_nugget"}
		]
	})
	
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [
		{"item": "minecraft:snowball"},{"item": "minecraft:snowball"},{"item": "minecraft:snowball"},{"item": "minecraft:snowball"},
		{"item": "minecraft:sugar"},{"item": "minecraft:sugar"},
		{"tag": "c:foods/berry"},{"tag": "c:fruits/strawberry"},
		{
		"type": "neoforge:tag",
		"amount": 250,
		"tag": "c:milk"
		}],
        "processing_time": 300,
		"results": [{"amount": 500,"id": "dndesires:strawberry_milkshake"}]
	})
	
	arcadia.custom({
		"type": "create_dragons_plus:ending",
		"ingredients": [{ "item": "create:chromatic_compound" }],
		"results": [{ "id": "create:shadow_steel" }]
	})
	
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "create:chromatic_compound"}, {"item": "minecraft:glowstone_dust"}, {"item": "minecraft:glowstone_dust"}],
		"results": [{ "id": "create:refined_radiance" }]
	})
	
	// More interesting Rose Quartz alternate //
	//Activated Redstone
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "ae2:charged_certus_quartz_crystal"}, {"item": "minecraft:redstone"}, {"item": "minecraft:redstone"}],
		"results": [{ "amount": 250, "id": "kubejs:activated_redstone" }]
	})
	//Rose Quartz
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [
			{
				"type": "neoforge:single",
				"amount": 500,
				"fluid": "kubejs:activated_redstone"
			}, 
			{"item": "minecraft:quartz"}
		],
		"results": [{ "id": "create:rose_quartz" }]
	})
	
	
})