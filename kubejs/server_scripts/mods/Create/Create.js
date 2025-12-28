ServerEvents.tags("item", arcadia => {
	
	
})


ServerEvents.recipes(arcadia => {
	
	arcadia.custom({
		"type": "create_dragons_plus:ending",
		"ingredients": [{ "item": "create:chromatic_compound" }],
		"results": [{ "id": "create:shadow_steel" }]
	})
	
	arcadia.custom({
		"type": "create:mixing",
		"ingredients": [{"item": "create:chromatic_compound"}, {"item": "minecraft:glowstone_dust"}, {"item": "minecraft:glowstone_dust"}],
		"results": [{"id": "create:refined_radiance"}]
	})
	
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
        }).id('kubejs:garnished/anniversary_cake')*/
})