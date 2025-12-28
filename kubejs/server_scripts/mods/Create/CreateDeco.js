
ServerEvents.recipes(arcadia => {

	// Remove coins
    const metals = [
        'copper',
        'brass',
        'gold',
        'industrial_iron',
        'iron',
        'netherite',
        'zinc'
    ]

    metals.forEach(metal => {
        const coin = `createdeco:${metal}_coin`
        const coinstack = `createdeco:${metal}_coinstack`

        // Remove all recipes that create these items
        arcadia.remove({ output: coin })
        arcadia.remove({ output: coinstack })

        // Optionally, also remove recipes that use them as ingredients
        arcadia.remove({ input: coin })
        arcadia.remove({ input: coinstack })
    })

    
})