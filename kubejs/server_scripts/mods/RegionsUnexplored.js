ServerEvents.tags('item', arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {
    
	// Replacing Regions Unexplored painted planks. They conflicted with the vanilla chest recipe.
	const paintedPlanks = 
	[
        'white', 'orange',
        'magenta', 'light_blue',
        'yellow', 'lime',
        'pink', 'gray',
        'light_gray',
        'cyan', 'purple',
        'blue', 'brown',
        'green', 'red', 'black'
	]
    paintedPlanks.forEach(type => {
        const runtimeId = `regions_unexplored:${type}_painted_planks`
        arcadia.remove({ id: runtimeId })
        arcadia.shaped(`regions_unexplored:${type}_painted_planks`,
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{A: '#minecraft:planks', B: `minecraft:${type}_dye`})
    })
    
    
	
})