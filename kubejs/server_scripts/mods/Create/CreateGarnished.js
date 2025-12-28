ServerEvents.tags("item", arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {

    //arcadia.remove({ id: 'garnished_additions:mixing/refined_radiance' })
    //arcadia.remove({ id: 'garnished_additions:mixing/shadow_steel' })
    //arcadia.remove({ id: 'garnished_additions:mixing/chromatic_compound' })
    //arcadia.remove({ id: 'garnished:mechanical_crafting/anniversary_cake' })
    //arcadia.remove({ id: 'garnished:compacting/ender_jelly' })
    
	
	/*arcadia.custom({
        type: "create:crushing",
        ingredients: [{item: "alltheores:salt_block"}],
		processing_time: 200,
		results: 
		[{ id: "garnished:crushed_salt" }]
	})*/

	//arcadia.replaceInput({ id: 'garnished:mechanical_crafting/anniversary_cake' }, 'garnished:venerable_dough', 'c:dough')
	//arcadia.replaceInput({ id: 'garnished:mechanical_crafting/anniversary_cake' }, 'garnished:bok_choy', 'pamhc2crops:bokchoyitem')
    
    /*
    arcadia.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "A": { "tag": "c:doughs" },
                "B": { "item": "garnished:bok_choy" },
                "C": { "item": "garnished:torrid_blend" }, 
                "D": { "tag": "garnished:mastic_paste" },
                "E": { "item": "minecraft:sugar" },
                "F": { "tag": "c:milks" }
            },
            "pattern": [
                "  E  ",
                "  A  ",
                " DED ",
                " AFA ",
                "DEEED",
                "ABCBA"
            ],
            "result": { "id": "garnished:anniversary_cake" },
            "show_notification": false
        }).id('kubejs:garnished/anniversary_cake')


	arcadia.custom({
	"type": "create:compacting",
	"ingredients": [
		{ "item": "ae2:ender_dust" },
		{ "item": "garnished:salt_compound" },
		{ "type": "neoforge:single",
		 "amount": 500,
		 "fluid": "minecraft:water"
		}
		],
	"results": [{ "amount": 2, "id": "garnished:ender_jelly" }]
	})*/

    
})