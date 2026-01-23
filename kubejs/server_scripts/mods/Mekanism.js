ServerEvents.tags("item", arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {
	
	//arcadia.remove({ id: '' })  ===>  Removes recipe by its ID
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/pickaxe' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/axe' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/shovel' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/hoe' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/paxel' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	arcadia.replaceInput({ id: 'mekanismtools:steel/tools/sword' }, 'minecraft:iron_ingot', '#c:rods/wooden')
	
	
	
})