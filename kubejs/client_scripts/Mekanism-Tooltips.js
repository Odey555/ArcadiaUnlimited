ItemEvents.modifyTooltips(arcadia => {

    // ##### Gear #####

    //Mekasuit
    arcadia.add(/mekanism:mekasuit_/, [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity')
    ])
    //Meka Tool
    arcadia.add('mekanism:meka_tool', [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity!'),
        Text.green('Increased Attack Speed & Damage!')
    ])

    // ##### Generators #####

    //Solar Generator
    arcadia.add('mekanismgenerators:solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Advanced Solar Generator
    arcadia.add('mekanismgenerators:advanced_solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Wind Generator
    arcadia.add('mekanismgenerators:wind_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Heat Generator
    arcadia.add('mekanismgenerators:heat_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Gas Burning Generator
    arcadia.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Decreased Energy Production!'),
        Text.red('Increased Fuel Consumption!')
    ])
    //Fission Generator
    arcadia.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])
    //Fusion Generator
    arcadia.add(/mekanismgenerators:fusion_/, [
        Text.red('Decreased Energy Production!'),
        Text.green('Decreased Fuel Consumption!'),
    ])
    //Turbine
    arcadia.add(/mekanismgenerators:turbine_/, [
        Text.green('Increased Production Speed!'),
    ])
    //Boiler
    arcadia.add(/mekanism:boiler_/, [
        Text.green('Increased Production Speed!'),
    ])

    // ##### Machines #####

    //Upgrades
    arcadia.add(/mekanism:upgrade_/, [
        Text.green('Increased Machine Boost!')
    ])
    //Waste Barrel
    arcadia.add('mekanism:radioactive_waste_barrel', [
        Text.green('Increased Decay Rate!')
    ])
    //Thermal Evaporation Tower
    arcadia.add(/mekanism:thermal_evaporation_/, [
        Text.green('Increased Production Speed!')
    ])
    //Solar Neutron Activator
    arcadia.add('mekanism:solar_neutron_activator', [
        Text.green('Increased Production Speed!'),
        Text.green('Waste -> Polonium buffed!')
    ])
    //Isotopic Centrifuge
    arcadia.add('mekanism:isotopic_centrifuge', [
        Text.green('Waste -> Plutonium buffed!')
    ])
    //Electric Pump
    arcadia.add('mekanism:electric_pump', [
        Text.green('Increased Production Speed!')
    ])
    //SPS
    arcadia.add(/mekanism:sps_/, [
        Text.green('Decreased Energy Consumption!')
    ])
})