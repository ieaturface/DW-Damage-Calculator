# Damage-Calculator

This is the repository for the Loomian Legacy Damage Calculator

## Contributing

There are 3 areas you can contribute to: loomian data, moves data, and set data.

For loomian data, follow this template: 

```js
    searknight: {
        name: "Searknight",
        number: 3,
        types: ["Fire", "Metal"],
        baseStats: {
            hp: 50,
            energy: 41,
            attack: 38,
            defense: 41,
            attackR: 42,
            defenseR: 38,
            speed: 40
        }
    }
```

For move data, follow this template: 

```js
    rapidFire: {
        name: "Rapid Fire",
        power: 20,
        type: "Fire",
        mr: "Ranged",
        contact: true,
        hits: 3,
        aoe: true,
        secondaryEffect: true
    }
```
If the move doesn't make contact, is single hit, not aoe, or doesn't have a secondary effect, don't include that property at all. The first 4 must be included, last 4 are optional.

For set data, follow this template: 

```js
    {
        name: "Duskit",
        setName: "Peace of Mind",
        evs: {
            hp: 100,
            energy: 0,
            attack: 0,
            defense: 0,
            attackR: 200,
            defenseR: 0,
            speed: 200
        },
        ivs: {
            hp: 40,
            energy: 40,
            attack: 40,
            defense: 40,
            attackR: 40,
            defenseR: 40,
            speed: 40
        },
        moves: {
            move1: "Spectral Burst",
            move2: "Brainwash",
            move3: "Peace Of Mind",
            move4: "Final Ruse"
        },
        posNature: "nimble",
        negNature: "none",
        ability: "None",
        item: "Power Cuffs",
        level: 50
    }
 ```
 Please be aware that everything is case sensitive so natures must be lowercase, abilities, items, and moves all capitalized. I'd recommend keeping level at level 50. Other than that, make any set you want.
