
ServerEvents.recipes(arcadia => {
	// Gears
    arcadia.remove({ id: 'industrialforegoing:iron_gear'})
    arcadia.remove({ id: 'industrialforegoing:gold_gear'})
    arcadia.remove({ id: 'industrialforegoing:diamond_gear'})

	// Ingots
	arcadia.remove({ id: 'mekanism:ingot_bronze'})
	
	// Smelting
    arcadia.remove({ id: 'deeperdarker:coal_from_smelting_gloomslate_coal_ore'})
    arcadia.remove({ id: 'deeperdarker:coal_from_blasting_gloomslate_coal_ore'})
    arcadia.remove({ id: 'deeperdarker:iron_ingot_from_smelting_gloomslate_iron_ore'})
    arcadia.remove({ id: 'deeperdarker:iron_ingot_from_blasting_gloomslate_iron_ore'})
    arcadia.remove({ id: 'deeperdarker:copper_ingot_from_smelting_gloomslate_copper_ore'})
    arcadia.remove({ id: 'deeperdarker:copper_ingot_from_blasting_gloomslate_copper_ore'})
    arcadia.remove({ id: 'deeperdarker:gold_ingot_from_smelting_gloomslate_gold_ore'})
    arcadia.remove({ id: 'deeperdarker:gold_ingot_from_blasting_gloomslate_gold_ore'})
    arcadia.remove({ id: 'deeperdarker:redstone_from_smelting_gloomslate_redstone_ore'})
    arcadia.remove({ id: 'deeperdarker:redstone_from_blasting_gloomslate_redstone_ore'})
    arcadia.remove({ id: 'deeperdarker:emerald_from_smelting_gloomslate_emerald_ore'})
    arcadia.remove({ id: 'deeperdarker:emerald_from_blasting_gloomslate_emerald_ore'})
    arcadia.remove({ id: 'deeperdarker:lapis_lazuli_from_smelting_gloomslate_lapis_ore'})
    arcadia.remove({ id: 'deeperdarker:lapis_lazuli_from_blasting_gloomslate_lapis_ore'})
    arcadia.remove({ id: 'deeperdarker:diamond_from_smelting_gloomslate_diamond_ore'})
    arcadia.remove({ id: 'deeperdarker:diamond_from_blasting_gloomslate_diamond_ore'})
	
	arcadia.remove({ id: 'mekanism:processing/lead/ingot/from_ore_smelting'})
    arcadia.remove({ id: 'mekanism:processing/lead/ingot/from_ore_blasting'})
    arcadia.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_smelting'})
    arcadia.remove({ id: 'mekanism:processing/osmium/ingot/from_ore_blasting'})
    arcadia.remove({ id: 'mekanism:processing/tin/ingot/from_ore_smelting'})
    arcadia.remove({ id: 'mekanism:processing/tin/ingot/from_ore_blasting'})
	
    arcadia.remove({ id: 'immersiveengineering:smelting/ingot_uranium'})
	
	// Ores
	arcadia.remove({ id: 'oritech:iron_clump'})
	
	// Dusts	
	arcadia.remove({ id: 'oritech:quartz_dust'})
	arcadia.remove({ id: 'oritech:crushing/compat/create/quartz'})
})