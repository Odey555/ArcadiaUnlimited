ServerEvents.tags("item", arcadia => {
	
})


ServerEvents.recipes(arcadia => {
	
	// Remove useless Oritech clumps
	
	//arcadia.remove({ id: '' })
	arcadia.remove({ output: 'oritech:small_gold_clump' })
	arcadia.remove({ output: 'oritech:small_copper_clump' })
	arcadia.remove({ output: 'oritech:small_iron_clump' })
	arcadia.remove({ output: 'oritech:small_nickel_clump' })
	arcadia.remove({ output: 'oritech:small_platinum_clump' })
	
	arcadia.remove({ output: 'oritech:gold_clump' })
	arcadia.remove({ output: 'oritech:copper_clump' })
	arcadia.remove({ output: 'oritech:iron_clump' })
	arcadia.remove({ output: 'oritech:platinum_clump' })
	arcadia.remove({ output: 'oritech:nickel_clump' })
	
	
})