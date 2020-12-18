const Animation = require("Animation")
const Scene = require("Scene")

main()

async function main() {
    const particleSystem = await Scene.root.findFirst("SnowParticleSystem")

	particleSystem.hsvaColorModulationModifier = Animation.samplers.HSVA([
        Animation.samplers.constant(1),                 // The hue
        Animation.samplers.constant(1),                 // and the saturation
        Animation.samplers.constant(1),                 // ...aaaand the value is constant and don't change.
        Animation.samplers.sequence({                   // However the alpha is controled to fade out
            samplers: [                                 //
                Animation.samplers.constant(1),         // Keep the particles opacity full for 3/4 of their lifetime
                Animation.samplers.easeOutSine(1, 0),   // Fade out particles for the last quater of their lifetime
            ],                                          //
            knots: [0, 0.75, 1],                        // [0, 0.75] - FULL OPACITY; [0.75, 1] - FADE OUT
        })
    ])
}
