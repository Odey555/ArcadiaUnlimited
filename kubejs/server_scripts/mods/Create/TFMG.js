ServerEvents.tags("item", arcadia => {
	
    //The Factory Must Grow - Blast Stove fuel compat
    arcadia.add('immersiveengineering:creosote','tfmg:blast_stove_fuel')
  
})


ServerEvents.recipes(arcadia => {
    console.info("[AU] Loading TFMG Custom Recipes...")
	
	// Remove items
    //arcadia.remove('tfmg:sequenced_assembly/heavy_plate')
	arcadia.remove({ id: 'create:crushing/limestone' })
	arcadia.remove('tfmg:empty_spool')
	arcadia.remove('tfmg:copper_spool')
	arcadia.remove('tfmg:constantan_spool')
	arcadia.remove('tfmg:aluminum_spool')
	arcadia.remove('tfmg:winding_machine')
	arcadia.remove({output: 'tfmg:copper_spool'})
	arcadia.remove({output: 'tfmg:constantan_spool'})
	arcadia.remove({output: 'tfmg:aluminum_spool'})
	
	// Remove recipes by ID
	arcadia.remove({ id: 'tfmg:winding/resistor' })
	arcadia.remove({ id: 'tfmg:winding/electromagnetic_coil' })
	arcadia.remove({ id: 'tfmg:winding/large_coil' })
	arcadia.remove({ id: 'tfmg:crafting/materials/winding_machine' })
	arcadia.remove({ id: 'tfmg:crafting/materials/unfinished_electromagnetic_coil' })
	
    
    //////////  TFMG  //////////  
    
	arcadia.custom({
	type: "create:deploying",
	ingredients: [{ tag: "immersiveengineering:treated_wood" }, { tag: "c:ingots/steel" }],
	results: [{ id: "tfmg:steel_casing" }],
	})
	
	arcadia.custom({
		"type": "createaddition:charging",
		"energy": 4000,
		"ingredients": [{"item": "createaddition:copper_spool"}],
		"max_charge_rate": 360,
		"results": [{"id": "tfmg:electromagnetic_coil"}]
	})

	arcadia.custom({
	type: "create:deploying",
	ingredients: [{ item: "tfmg:laminated_magnetic_alloy_block" }, { item: "createaddition:copper_spool" }],
	results: [{ id: "tfmg:large_coil" }],
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
    // Only makes sense that AE2 silicon should be compatible
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
	
	arcadia.custom({
		type: "create:filling",
		ingredients: [
			{item: "tfmg:empty_circuit_board"},
			{type: "neoforge:single", amount: 250, fluid: 'createmetalwork:molten_gold'}
		],
		results: [{id: "tfmg:coated_circuit_board"}]
	})
	
	
	arcadia.custom({
		type: 'create:sequenced_assembly',
		ingredient: { item: 'tfmg:unfinished_resistor' },
		loops: 1,
		results: [{ id: 'tfmg:resistor' }],
		sequence: [
			{
				"type": "create:deploying",
				"ingredients": [{ item: "tfmg:unfinished_resistor" }, { item: "createaddition:electrum_spool" }],
				"results": [{ id: "tfmg:unfinished_resistor" }]
			},
			{
				type: "create_new_age:energising",
				energy_needed: 1000,
				ingredients: [{ item: "tfmg:unfinished_resistor" }],
				results: [{id: "tfmg:resistor"}]
			}
		],
		transitional_item: { id: 'tfmg:unfinished_resistor' }
	})
    
	
	// Cinderblock casting with Productive Metalworks
	arcadia.custom({
		type: "productivemetalworks:item_casting",
		cast: { item: "productivemetalworks:ingot_cast" },
		consume_cast: false,
		fluid: {amount: 250, fluid: "tfmg:liquid_concrete"},
		result: {count: 1, id: "tfmg:cinderblock"}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})